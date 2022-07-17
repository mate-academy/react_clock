import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: '',
  };

  changingClockNameTimeId = 0;

  componentDidMount() {
    this.setRandomClockName();

    this.changingClockNameTimeId = window.setInterval(() => {
      this.setRandomClockName();
    }, 3300);

    document.addEventListener(
      'contextmenu',
      () => this.hideClock(),
    );
    document.addEventListener('click', () => this.showClock());
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (
      !Object.keys(prevProps).length
      && prevState.clockName
      && prevState.clockName !== this.state.clockName
    ) {
      // eslint-disable-next-line no-console
      console.log(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    document.removeEventListener(
      'contextmenu',
      () => this.hideClock(),
    );
    document.removeEventListener('click', () => this.showClock());
  }

  setRandomClockName() {
    this.setState(({
      clockName: getRandomName(),
    }));
  }

  showClock() {
    this.setState({ hasClock: true });
  }

  hideClock() {
    this.setState({ hasClock: false });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
