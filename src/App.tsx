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
  renameTimer: number | null = null;

  private readonly renameTimerInterval = 3300;

  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  private handleLeftClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  private handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);

    this.renameTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, this.renameTimerInterval);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);

    if (this.renameTimer) {
      window.clearInterval(this.renameTimer);
      this.renameTimer = null;
    }
  }

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
