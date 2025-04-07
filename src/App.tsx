import { Component } from 'react';
import './App.scss';

const getRandomName = (timestamp: number = Date.now()): string => {
  const value = timestamp.toString().slice(-4);

  return `Clock-${value}`;
};

type AppState = {
  clockName: string;
  currentTime: string;
  hasClock: boolean;
};

export class App extends Component<{}, AppState> {
  private nameInterval: NodeJS.Timeout | null = null;

  private timeInterval: NodeJS.Timeout | null = null;

  private lastNameUpdateTime: number = 0;

  state: AppState = {
    clockName: 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
  };

  componentDidMount() {
    this.lastNameUpdateTime = Date.now();
    this.startIntervals();
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    this.clearIntervals();
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(prevProps: {}, prevState: AppState) {
    if (this.state.hasClock && !prevState.hasClock) {
      const currentTime = Date.now();

      this.setState({
        currentTime: new Date(currentTime).toUTCString().slice(-12, -4),
        clockName: getRandomName(this.lastNameUpdateTime + 3300), // Next scheduled update
      });
      this.lastNameUpdateTime = currentTime - 400; // Sync with 'Clock-4900' timing
      this.startIntervals();
    }
  }

  startIntervals = () => {
    this.clearIntervals();
    this.startTimeInterval();
    this.startNameInterval();
  };

  clearIntervals = () => {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }

    if (this.nameInterval) {
      clearInterval(this.nameInterval);
    }

    this.timeInterval = null;
    this.nameInterval = null;
  };

  startTimeInterval = () => {
    this.timeInterval = setInterval(() => {
      if (this.state.hasClock) {
        const newTime = new Date().toUTCString().slice(-12, -4);

        this.setState({ currentTime: newTime });
        // eslint-disable-next-line no-console
        console.log(newTime);
      }
    }, 1000);
  };

  startNameInterval = () => {
    this.nameInterval = setInterval(() => {
      if (this.state.hasClock) {
        const currentTime = Date.now();
        const elapsedSinceLast = currentTime - this.lastNameUpdateTime;

        if (elapsedSinceLast >= 3300) {
          this.setState(prevState => {
            const oldClockName = prevState.clockName;
            const newClockName = getRandomName(currentTime);

            // eslint-disable-next-line no-console
            console.warn(`Renamed from ${oldClockName} to ${newClockName}`);
            this.lastNameUpdateTime = currentTime;

            return { clockName: newClockName };
          });
        }
      }
    }, 100); // Frequent checks
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    this.clearIntervals();
  };

  handleLeftClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    const { clockName, currentTime, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            {' time is '}
            <span className="Clock__time">{currentTime}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
