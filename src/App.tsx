import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface AppState {
  hasClock: boolean;
  clockName: string;
  today: Date;
  consoleInfoInterval: number | null;
}

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
    consoleInfoInterval: null,
    // this.timerId
  };
  // const today = new Date();
  // let clockName = 'Clock-0';

  // This code starts a timer
  // componentDidMount();

  // this code stops the timer
  //

  // window.clearInterval(timerId);

  componentDidMount() {
    if (this.state.hasClock) {
      const consoleInfoInterval = this.printInfo();

      this.setState({ consoleInfoInterval });
    }

    // this.printInfo();

    this.getTime();
    this.timerId();

    // this.setState({ consoleInfoInterval });
  }

  componentWillUnmount() {
    if (!this.state.hasClock && this.state.consoleInfoInterval) {
      clearInterval(this.state.consoleInfoInterval);
      this.setState({ consoleInfoInterval: null });
    }
  }

  getTime() {
    const time = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    return time;
  }

  timerId() {
    return window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  printInfo() {
    if (this.state.hasClock) {
      return window.setInterval(() => {
        // eslint-disable-next-line no-console
        console.info(this.state.today);
      }, 1000);
    }

    return null;
  }

  render() {
    const { today, hasClock, clockName } = this.state;

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

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
              {today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
