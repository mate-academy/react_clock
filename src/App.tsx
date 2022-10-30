/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  render() {
    const { clockName, today, hasClock } = this.state;

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
        clockName: getRandomName(),
      });
    });

    return (
      <div className="App">
        <h1>React clock</h1>

        { hasClock && (
          <Clock
            today={today}
            clockName={clockName}
            getRandomName={getRandomName}
          />
        )}
      </div>
    );
  }
}
