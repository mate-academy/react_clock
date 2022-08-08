import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component < {}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    window.addEventListener('contextmenu', () => {
      this.setState({
        hasClock: false,
      });
    });

    window.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    this.timerId = window.setInterval(() => {
      const prevName = this.state.clockName;

      this.setState({
        clockName: getRandomName(),
      });
      // eslint-disable-next-line
    console.log(`Renamed from ${prevName} to ${this.state.clockName}`);
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockname={clockName} />
        )}
      </div>
    );
  }
}
