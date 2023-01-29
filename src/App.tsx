import React from 'react';
import './App.scss';

import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerForClockName = 0;

  componentDidMount(): void {
    this.timerForClockName = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('click', () => {
      this.handleShowClock();
    });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.handleHiddenClock();
    });
  }

  componentWillUnmount(): void {
    clearInterval(this.timerForClockName);

    document.removeEventListener('click', this.handleShowClock);

    document.removeEventListener('contextmenu', this.handleHiddenClock);
  }

  handleShowClock() {
    this.setState({ hasClock: true });
  }

  handleHiddenClock() {
    this.setState({ hasClock: false });
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
