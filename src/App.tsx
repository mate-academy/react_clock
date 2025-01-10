// App.tsx
import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type AppState = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: NodeJS.Timeout | undefined = undefined;

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);
  }

  // #region handlers
  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };
  // #endregion handlers

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
