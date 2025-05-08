import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  today: Date;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  get time(): string {
    return this.state.today.toUTCString().slice(-12, -4);
  }

  timerId = 0;

  timerIdToday = 0;

  // This code starts a timer
  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerIdToday = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now }, () => {
        if (this.state.hasClock) {
          // eslint-disable-next-line no-console
          console.log(`${this.time}`);
        }
      });
    }, 1000);

    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState(prevState => {
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${prevState.clockName} to ${newName}`);

        return { clockName: newName };
      });
    }, 3300);
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerIdToday);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock state={this.state} time={this.time} />}
      </div>
    );
  }
}
