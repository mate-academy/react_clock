import React from 'react';
import './App.scss';

interface StateApp {
  clockName: string;
  hasClock: boolean;
}

interface PropsClock {
  name: string;
}

interface StateClock {
  today: Date;
  hasClock: boolean;
}

export class Clock extends React.Component<PropsClock, StateClock> {
  state: Readonly<StateClock> = {
    today: new Date(),
    hasClock: true,
  };

  private timerID: number = 0;

  handleTimerId = () => {
    const now = new Date();

    if (this.state.hasClock) {
      this.setState({ today: now });
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }
  };

  componentDidMount(): void {
    this.timerID = window.setInterval(() => this.handleTimerId(), 1000);
  }

  componentDidUpdate(prevProps: Readonly<PropsClock>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerID);
  }

  render(): React.ReactNode {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, StateApp> {
  state: Readonly<StateApp> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockId = 0;

  handleClockId = () => {
    this.setState({ clockName: getRandomName() });
  };

  setHasClockFalse = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  setHasClockTrue = () => {
    this.setState(() => ({
      hasClock: true,
    }));
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.setHasClockFalse);
    document.addEventListener('click', this.setHasClockTrue);

    this.clockId = window.setInterval(this.handleClockId, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.setHasClockFalse);
    document.removeEventListener('click', this.setHasClockTrue);

    window.clearInterval(this.clockId);
  }

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          {hasClock && <Clock name={clockName} />}
        </div>
      </>
    );
  }
}
