import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  isShownClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    isShownClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => (
      this.handleNameChange()), 3300);

    document.addEventListener('click', this.handleShowClock);

    document.addEventListener('contextmenu', this.handleHideClock);
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>): void {
    const { isShownClock, clockName } = this.state;
    const isChange = prevState.clockName !== clockName;

    if (isShownClock && isChange) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
  }

  handleNameChange = () => (
    this.setState({ clockName: getRandomName() })
  );

  handleShowClock = () => {
    this.setState({ isShownClock: true });
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isShownClock: false });
  };

  render() {
    const { clockName, isShownClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isShownClock
          && (
            <Clock
              clockName={clockName}
            />
          )}
      </div>
    );
  }
}
