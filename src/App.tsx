import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  clockName: string;
  hasClock: boolean;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId = 0;

  // This code starts a timer
  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      if (this.state.hasClock) {
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      if (!this.state.hasClock) {
        this.setState({ hasClock: true });
      }
    });
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.nameTimerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="App">
          {this.state.hasClock && <Clock name={this.state.clockName} />}
        </div>
      </div>
    );
  }
}
