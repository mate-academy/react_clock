import React from 'react';
import './App.scss';

type PropsClock = {
  name: string;
};

type StateClock = {
  time: Date;
};

const formatTime = (time: Date): string => {
  return time.toUTCString().slice(-12, -4);
};

export class Clock extends React.Component<PropsClock, StateClock> {
  state = {
    time: new Date(),
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.log(formatTime(currentTime));

      this.setState({ time: currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: PropsClock) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{formatTime(time)}</span>
      </div>
    );
  }
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
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
