import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';
import { getRandomName } from './services/randomNames';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  private timerId: number | null = null;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleHideClock = (e: MouseEvent) => {
    e.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  handleShowClock = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);

    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
