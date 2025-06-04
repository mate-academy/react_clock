import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  nameTimerId = 0;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleShowClock = () => {
    this.setState({ hasClock: true });
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock);

    this.nameTimerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState(({ clockName }) => {
        if (newName !== clockName) {
          return { clockName: newName };
        }

        return null;
      });
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: AppState) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.nameTimerId);

    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
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
