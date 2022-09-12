/* eslint-disable no-console */
import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component {
  state: Readonly<{
    today: Date,
    clockName?: string,
    hasClock: boolean,
  }> = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    let timerId: number | undefined = window?.setInterval(() => {
      this.setState((prevState) => ({
        ...prevState,
        clockName: getRandomName(),
      }));
    }, 3300);

    let printId: number | undefined = window?.setInterval(() => {
      console.info(new Date().toLocaleTimeString());
    }, 1000);

    document?.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      if (this.state.hasClock) {
        this.setState((prevState) => ({
          ...prevState,
          hasClock: false,
        }));
        window?.clearInterval(printId);
        window?.clearInterval(timerId);
        printId = undefined;
        timerId = undefined;
      }
    });

    document?.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      if (!this.state.hasClock) {
        this.setState((prevState) => ({
          ...prevState,
          hasClock: true,
        }));
        printId = window?.setInterval(() => {
          console.info(new Date().toLocaleTimeString());
        }, 1000);
        timerId = window?.setInterval(() => {
          this.setState((prevState) => ({
            ...prevState,
            clockName: getRandomName(),
          }));
        }, 3300);
      }
    });

    const removeListeners = () => {
      document?.removeEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault();

        if (this.state.hasClock) {
          this.setState((prevState) => ({
            ...prevState,
            hasClock: false,
          }));
        }
      });

      document?.removeEventListener('click', (event: MouseEvent) => {
        event.preventDefault();

        if (!this.state.hasClock) {
          this.setState((prevState) => ({
            ...prevState,
            hasClock: true,
          }));
        }
      });
    };

    return (
      removeListeners()
    );
  }

  componentDidUpdate(_: unknown, prevState: typeof this.state) {
    console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  render() {
    const {
      today,
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {today.toLocaleTimeString('us', { hour12: false })}
            </span>
          </div>
        )}
      </div>
    );
  }
}
