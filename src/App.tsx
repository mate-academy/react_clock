import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, AppState> {
  private timerId: number | null = null;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newClockName = getRandomName();

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${this.state.clockName} to ${newClockName}`);
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleLeftClick);
  }

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();
    this.stopClock();
  };

  handleLeftClick = (event: MouseEvent): void => {
    if (event.button === 0) {
      this.startClock();
    }
  };

  stopClock = (): void => {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }

    this.setState({ hasClock: false });
  };

  startClock = (): void => {
    if (this.timerId === null) {
      const newClockName = getRandomName();

      this.timerId = window.setInterval(() => {
        const updatedClockName = getRandomName();

        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${newClockName} to ${updatedClockName}`);
        this.setState({ clockName: updatedClockName });
      }, 3300);

      this.setState({
        hasClock: true,
        clockName: newClockName,
      });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          && <Clock name={clockName} />}
      </div>
    );
  }
}
