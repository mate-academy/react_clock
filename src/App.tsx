import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
  }

  handleShowClock = (e: MouseEvent) => {
    e.preventDefault();
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleHideClock = (e: MouseEvent) => {
    e.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
