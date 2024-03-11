import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  hasClock: boolean;
  currentClockName: string;
  count: number;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<State> {
  state: State = {
    hasClock: true,
    currentClockName: 'Clock-0',
    count: 0,
  };

  timerId = 0;

  componentDidMount(): void {
    window.addEventListener('contextmenu', this.rightButtonClick);
  }

  componentDidUpdate(_: Props, prevState: State): void {
    if (prevState.hasClock === false && this.state.hasClock === true) {
      window.removeEventListener('click', this.leftButtonClick);
      window.addEventListener('contextmenu', this.rightButtonClick);
    }

    if (prevState.hasClock === true && this.state.hasClock === false) {
      window.addEventListener('click', this.leftButtonClick);
      window.removeEventListener('contextmenu', this.rightButtonClick);
      this.setState({
        count: 1,
      });
    }

    if (this.state.count === 0) {
      if (
        prevState.currentClockName !== this.state.currentClockName &&
        prevState.hasClock === true &&
        this.state.hasClock === true
      ) {
        // eslint-disable-next-line no-console
        console.debug(
          `Renamed from ${prevState.currentClockName} to ${this.state.currentClockName}`,
        );
      }
    }

    if (this.state.count === 1) {
      if (
        prevState.currentClockName !== this.state.currentClockName &&
        prevState.hasClock === true &&
        this.state.hasClock === true &&
        this.state.currentClockName !== 'Clock-4900'
      ) {
        // eslint-disable-next-line no-console
        console.debug(
          `Renamed from ${prevState.currentClockName} to ${this.state.currentClockName}`,
        );
      }
    }
  }

  handelnClockNameChenger = (newName: string) => {
    this.setState((pervState: State) => {
      return { ...pervState, currentClockName: newName };
    });
  };

  handelnTimerStart = () => {
    this.timerId = window.setInterval(
      () => this.handelnClockNameChenger(getRandomName()),
      3300,
    );
  };

  handelnTimerStop = () => {
    window.clearInterval(this.timerId);
  };

  rightButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftButtonClick = () => {
    this.setState({ hasClock: true });
  };

  appearNameHook = () => {
    this.setState({
      currentClockName: 'Clock-4900',
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock
            timerStart={this.handelnTimerStart}
            timerStop={this.handelnTimerStop}
            currentClockName={this.state.currentClockName}
            count={this.state.count}
            appearNameHook={this.appearNameHook}
          />
        )}
      </div>
    );
  }
}
