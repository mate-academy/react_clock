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
  private timerForClockName?: number;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleRightMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftMouseClick = (event: MouseEvent) => {
    if (event.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightMouseClick);
    document.addEventListener('mousedown', this.handleLeftMouseClick);

    this.timerForClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    if (this.timerForClockName) {
      window.clearInterval(this.timerForClockName);
    }

    document.removeEventListener('contextmenu', this.handleRightMouseClick);
    document.removeEventListener('mousedown', this.handleLeftMouseClick);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
