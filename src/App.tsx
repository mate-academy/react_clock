/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  timerId: number | null;
  hasClock: boolean;
};
export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    timerId: null,
    hasClock: true,
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.setState({
      timerId: window.setInterval(() => {
        //const prevClockName = this.state.clockName;
        const newClockName = getRandomName();

        this.setState({ clockName: newClockName });
        //console.warn(`Renamed from ${prevClockName} to ${newClockName}`);
      }, 3300),
    });
  }

  // This code starts a timer
  componentWillUnmount(): void {
    if (this.state.timerId !== null) {
      window.clearInterval(this.state.timerId);
    }
  }

  // this code stops the timer
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
