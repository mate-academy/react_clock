import React from 'react';
import './App.scss';

type Props = {
  name: string;
};

class Clock extends React.Component<Props> {
  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return <strong className="Clock__name">{this.props.name}</strong>;
  }
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function updateTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type State = {
  clockName: string;
  today: string;
  hasClock: boolean;
};

export class App extends React.Component {
  clockNameTimerId: number = 0;

  timerId: number = 0;

  state: State = {
    clockName: 'Clock-0',
    today: updateTime(),
    hasClock: true,
  };

  handleContextMenu(event: MouseEvent) {
    event.preventDefault();

    this.setState({ hasClock: false });
    window.clearInterval(this.clockNameTimerId);
    window.clearInterval(this.timerId);
  }

  handleClick() {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerId = window.setInterval(() => {
      const updatedTime = updateTime();

      this.setState({ today: updatedTime });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.log(updatedTime);
      }
    }, 1000);

    this.setState({
      hasClock: true,
      today: updateTime(),
      clockName: getRandomName(),
    });
  }

  // This code starts a timer
  componentDidMount(): void {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerId = window.setInterval(() => {
      const updatedTime = updateTime();

      this.setState({ today: updatedTime });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.log(updatedTime);
      }
    }, 1000);

    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleClick);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimerId);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <Clock name={this.state.clockName} />

            {' time is '}

            <span className="Clock__time">{this.state.today}</span>
          </div>
        )}
      </div>
    );
  }
}
