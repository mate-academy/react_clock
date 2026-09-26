import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type ClockProps = {
  name: string;
};

class Clock extends React.Component<ClockProps> {
  timerId = 0;

  state = {
    today: new Date(),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      this.setState({
        today: currentTime,
      });

      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export class App extends React.Component {
  nameTimerId = 0;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.nameTimerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.nameTimerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock === true && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
