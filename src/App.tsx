import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, AppState> {
  private intervalName: NodeJS.Timeout | null = null;

  private intervalTime: NodeJS.Timeout | null = null;

  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.intervalName = setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

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
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
