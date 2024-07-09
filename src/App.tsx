import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function getCurrentTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type ClockProps = {
  name: string;
};

type ClockState = {
  currentTime: string;
};

class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    currentTime: getCurrentTime(),
  };

  changeCurrentTime = () => {
    const newTime = getCurrentTime();

    this.setState({ currentTime: newTime });

    // eslint-disable-next-line no-console
    console.log(newTime);
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.changeCurrentTime, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleClockAppear = () => {
    this.setState({ hasClock: true });
  };

  handleClockDisappear = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.handleClockAppear);

    document.addEventListener('contextmenu', this.handleClockDisappear);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClockAppear);

    document.removeEventListener('contextmenu', this.handleClockDisappear);

    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
