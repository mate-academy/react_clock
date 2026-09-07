import React from 'react';
import './App.scss';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  clockTimerId: number | undefined;

  componentDidMount(): void {
    this.clockTimerId = window.setInterval(() => {
      const current = new Date();
      const formattedTime = current.toUTCString().slice(-12, -4);

      this.setState({ time: current });

      // eslint-disable-next-line no-console
      console.log(formattedTime);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTimerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export class App extends React.Component<{}> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | undefined;

  handleLeftClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  handleRightClick = (event: Event) => {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
