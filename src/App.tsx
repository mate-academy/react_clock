import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<{ name: string }, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  timerIdCurrentTime: number = 0;

  componentDidMount(): void {
    this.timerIdCurrentTime = window.setInterval(() => {
      const updatedTime = new Date();

      this.setState({
        currentTime: updatedTime,
      });

      // eslint-disable-next-line no-console
      console.log(updatedTime.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<{ name: string }>): void {
    const nameChanged = this.props.name !== prevProps.name;

    if (nameChanged) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdCurrentTime);
  }

  render(): React.ReactNode {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

type StateApp = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, StateApp> {
  state: Readonly<StateApp> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdClockName = 0;

  handleContext = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleClick = () => {
    this.setState({
      hasClock: true,
    });
  };

  componentDidMount(): void {
    this.timerIdClockName = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContext);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdClockName);
    document.removeEventListener('contextmenu', this.handleContext);
    document.removeEventListener('click', this.handleClick);
  }

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
