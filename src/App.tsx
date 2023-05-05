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
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerClockNameId = 0;

  componentDidMount() {
    document.addEventListener('click', () => {
      if (!this.state.hasClock) {
        this.setState({ hasClock: true });
      }
    });

    document.addEventListener('contextmenu', (event: Event) => {
      if (this.state.hasClock) {
        event.preventDefault();
        this.setState({ hasClock: false });
      }
    });

    this.timerClockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>, prevState: Readonly<AppState>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerClockNameId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && <Clock name={clockName} /> }
      </div>
    );
  }
}
