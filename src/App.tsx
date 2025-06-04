import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  timerForClockName = 0;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  onRightMouseClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  onLeftMouseClick = (event: MouseEvent) => {
    event.preventDefault();

    if (event.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.onRightMouseClick);
    document.addEventListener('mousedown', this.onLeftMouseClick);

    this.timerForClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerForClockName);

    document.removeEventListener('contextmenu', this.onRightMouseClick);
    document.removeEventListener('mousedown', this.onLeftMouseClick);
  }

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
