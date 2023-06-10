/* eslint-disable no-console */
import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  today: Date,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId = 0;

  timeUpdate = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideTheClock);
    document.addEventListener('click', this.showTheClock);

    this.timeUpdate = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });

      if (this.state.hasClock) {
        console.info(today.toUTCString().slice(-12, -4));
      }
    }, 1000);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    const { clockName, hasClock } = this.state;

    if (prevState.clockName !== clockName && hasClock) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideTheClock);
    document.removeEventListener('click', this.showTheClock);

    window.clearInterval(this.timerId);
    window.clearInterval(this.timeUpdate);
  }

  hideTheClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showTheClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName, today } = this.state;

    return (
      <div
        className="App"
      >
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
