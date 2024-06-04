import React, { useState } from 'react';
import './App.scss';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export const App: React.FC = () => {
  const [hasClock, setHasClock] = useState(true);
  const [clockName, setClockName] = useState('Clock-0');

  type Props = {
    name: string;
  };

  type State = {
    time: Date;
  };

  class Clock extends React.Component<Props, State> {
    today = new Date();

    timerId = 0;

    state: Readonly<State> = {
      time: this.today,
    };

    currentTime = 0;

    // This code starts a timer
    componentDidMount(): void {
      this.timerId = window.setInterval(() => {
        setClockName(getRandomName());
      }, 3300);

      this.currentTime = window.setInterval(() => {
        this.today = new Date();
        this.setState({ time: this.today });

        if (hasClock) {
          // eslint-disable-next-line no-console
          console.log(this.state.time);
        }
      }, 1000);

      document.addEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault();

        setHasClock(false);
      });
    }

    componentDidUpdate(prevProps: Readonly<{ name: string }>): void {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${clockName}`);
    }

    // this code stops the timer
    componentWillUnmount(): void {
      window.clearInterval(this.timerId);
      window.clearInterval(this.currentTime);

      document.addEventListener('click', () => setHasClock(true));
    }

    render() {
      const { time } = this.state;

      return (
        <div className="App">
          <h1>React clock</h1>

          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {time.toUTCString().slice(-12, -4)}
            </span>
          </div>
        </div>
      );
    }
  }

  return hasClock && <Clock name={clockName} />;
};
