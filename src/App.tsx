import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  today: Date;
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, AppState> {
  private intervalName: NodeJS.Timeout | null = null;

  private intervalTime: NodeJS.Timeout | null = null;

  state: AppState = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.intervalName = setInterval(() => {
      const oldName = this.state.clockName;
      const newName = getRandomName();

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${oldName} to ${newName}`);
      }

      this.setState({ clockName: newName });
    }, 3300);

    this.intervalTime = setInterval(() => {
      this.setState({ today: new Date() });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.today.toUTCString().slice(-12, -4));
      }
    }, 1000);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    if (this.intervalName) {
      clearInterval(this.intervalName);
    }

    if (this.intervalTime) {
      clearInterval(this.intervalTime);
    }
  }

  render() {
    const { clockName, today, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} today={today} />
        )}
      </div>
    );
  }
}
