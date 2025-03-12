/* eslint-disable no-console */
import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type TimeDisplayProps = {
  name: string;
};

type TimeDisplayState = {
  time: string;
};

export class Clock extends Component<TimeDisplayProps, TimeDisplayState> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: currentTime });

      console.log(currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<TimeDisplayProps>): void {
    if (prevProps.name !== this.props.name) {
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = 0;
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: `Clock-0`,
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  updateClockName() {
    const newName = getRandomName();

    this.setState(prevState => {
      if (newName !== prevState.clockName) {
        return {
          clockName: newName,
        };
      }

      return null;
    });
  }

  newTimerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.newTimerId = window.setInterval(() => {
      this.updateClockName();
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);

    if (this.newTimerId) {
      clearInterval(this.newTimerId);
      this.newTimerId = 0;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock ? <Clock name={this.state.clockName} /> : ''}
      </div>
    );
  }
}
