import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

type State = {
  hasClock: boolean;
  clockName: string;
  printToday: Date;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    printToday: new Date(),
  };

  printClockName = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
    this.startTimers();
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    const { clockName, hasClock, printToday } = this.state;

    if (prevState.clockName !== clockName && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }

    if (prevState.printToday !== printToday && hasClock) {
      // eslint-disable-next-line no-console
      console.info(`${this.state.printToday.toUTCString().slice(-12, -4)}`);
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);
    this.stopTimers();
  }

  onUpdateToday = (newDate: Date) => this.setState({ printToday: newDate });

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleShowClock = () => {
    this.setState({ hasClock: true });
  };

  startTimers() {
    this.printClockName = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  stopTimers() {
    if (this.printClockName) {
      clearInterval(this.printClockName);
      this.printClockName = 0;
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            clockName={clockName}
            onUpdateToday={this.onUpdateToday}
          />
        )}
      </div>
    );
  }
}
