import React, { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerClock = 0;

  componentDidMount() {
    this.timerClock = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleHiddenClock);
    document.addEventListener('click', this.handleAppearanceClock);
  }

  componentWillUnmount() {
    clearInterval(this.timerClock);
    document.removeEventListener('contextmenu', this.handleHiddenClock);
    document.removeEventListener('click', this.handleAppearanceClock);
  }

  handleHiddenClock = (event: MouseEvent) => {
    event.preventDefault();

    if (event.button === 2) {
      this.setState({ hasClock: false });
    }
  };

  handleAppearanceClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clock={clockName} />}
      </div>
    );
  }
}
