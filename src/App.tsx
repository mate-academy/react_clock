import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface Prop {
  name: string;
}

interface ClockState {
  time: Date;
}

export class Clock extends React.Component<Prop, ClockState> {
  state: ClockState = {
    time: new Date(),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({ time: now });

      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Prop) {
    if (prevProps.name !== this.props.name) {
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined;

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event?.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName}></Clock>}
      </div>
    );
  }
}
