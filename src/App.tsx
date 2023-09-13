import { Component } from 'react';
import { Clock } from './component/Clock';
import './App.scss';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  timeUpdateTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.startClockNameTimer();
    this.startUpdateTimeTimer();
  }

  componentDidUpdate(_prevProps: {}, prevState: AppState) {
    if (this.state.hasClock) {
      if (this.state.clockName !== prevState.clockName) {
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleTimeUpdate = (time: string) => {
    // eslint-disable-next-line no-console
    console.info(time);
  };

  startClockNameTimer() {
    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);
  }

  startUpdateTimeTimer() {
    this.timeUpdateTimerId = window.setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            name={clockName}
            onTimeUpdate={this.handleTimeUpdate}
          />
        )}
      </div>
    );
  }
}
