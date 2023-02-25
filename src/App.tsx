import { Component } from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  currentTime: Date,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    currentTime: new Date(),
    clockName: 'Clock-0',
  };

  timerForTime = 0;

  timerForName = 0;

  componentDidMount() {
    this.timerForTime = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.currentTime.toUTCString().slice(-12, -4));
      }
    }, 1000);

    this.timerForName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3000);

    document.addEventListener('contextmenu', this.hideClock.bind(this));
    document.addEventListener('click', this.showClock.bind(this));
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.info(`Previous clock name: ${prevState.clockName}, current clock name: ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearTimeout(this.timerForTime);
    window.clearTimeout(this.timerForName);
    document.removeEventListener('contextmenu', this.hideClock.bind(this));
    document.removeEventListener('click', this.showClock.bind(this));
  }

  hideClock(event: MouseEvent): void {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  showClock(): void {
    this.setState({ hasClock: true });
  }

  render() {
    const { currentTime, clockName, hasClock } = this.state;

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
              {currentTime.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
