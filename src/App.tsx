import React from 'react';
import './App.scss';
import { Clock } from './Component/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

function getCurrentTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type State = {
  clockName: string;
  hasClock: boolean;
  today: Date;
  prevClockName: string;
  count: boolean;
};

export class App extends React.Component<{}, State> {
  timerId: number | undefined;

  clockNameTimerId: number | undefined;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
    today: new Date(),
    prevClockName: 'Clock-0',
    count: false,
  };

  componentDidMount() {
    this.clockNameTimerId = window.setInterval(() => {
      if (this.state.hasClock) {
        this.setState(() => ({
          prevClockName: this.state.clockName,
          clockName: getRandomName(),
          count: true,
        }));
        // eslint-disable-next-line no-console
        console.log(this.state.prevClockName, this.state.clockName, '3.3s');
      }
    }, 3300);

    this.timerId = window.setInterval(() => {
      if (this.state.hasClock) {
        const now = new Date();

        this.setState({ today: now }, () => {
          // eslint-disable-next-line no-console
          console.log(getCurrentTime());
        });
        //this.setState({ prevClockName: this.state.clockName });
      }
    }, 1000);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate() {
    if (this.state.count === true && this.state.hasClock !== false) {
      this.setState({ count: false });
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${this.state.prevClockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('Component will unmount');

    if (this.clockNameTimerId) {
      window.clearInterval(this.clockNameTimerId);
    }

    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState(
      () => ({
        hasClock: true,
        today: new Date(),
        clockName: 'Clock-4900',
      }),
      () => {
        this.timerId = window.setInterval(() => {
          const now = new Date();

          this.setState({ today: now });
        }, 1000);
      },
    );
  };

  render() {
    const { hasClock, clockName, today } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock
            name={clockName}
            key="clock"
            time={today.toUTCString().slice(-12, -4)}
          />
        )}
      </div>
    );
  }
}

export default App;
