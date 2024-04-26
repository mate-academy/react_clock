import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  constructor() {
    super([]);

    this.changeClockName = this.changeClockName.bind(this);
    this.hideClock = this.hideClock.bind(this);
    this.showClock = this.showClock.bind(this);
  }

  changeClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentDidUpdate(_: {}, prevState: State): void {
    console.debug(
      `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
    );
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);
  }

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock
            clockName={clockName}
            onClockNameChange={this.changeClockName}
          />
        )}
        {/*         {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )} */}
      </div>
    );
  }
}
