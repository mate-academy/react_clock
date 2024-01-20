import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string,
  hasClock: boolean,
}

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  // This code starts a timer
  timerId: number | null = null;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.removeClock);
    document.addEventListener('click', this.showClock);

    // Start the timer for updating clockName
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.removeClock);
    document.removeEventListener('click', this.showClock);

    // Clear the timer when the component is unmounted
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  removeClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

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
