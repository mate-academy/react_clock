/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';
import { Clock } from './components/clock/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    window.setInterval(() => {
      const name = getRandomName();

      if (this.state.hasClock) {
        console.debug(`Renamed from ${this.state.clockName} to ${name}`);
      }

      this.setState({ clockName: name });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
      // put your code here
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  // // this code stops the timer
  // window.clearInterval(timerId);
  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            clockName={this.state.clockName}
            hasClock={this.state.hasClock}
          />
        )}
      </div>
    );
  }
}
