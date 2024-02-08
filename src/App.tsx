import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export type State = {
  hasClock: boolean,
  today: Date,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    today: new Date(),
    clockName: 'Clock-0',
  };

  timerId = 0;

  timeId = 1;

  componentDidMount() {
    this.startTimer = this.startTimer.bind(this);
    this.leftClickHandler = this.leftClickHandler.bind(this);
    this.rightClickHandler = this.rightClickHandler.bind(this);
    document.addEventListener('contextmenu', this.rightClickHandler);
    document.addEventListener('click', this.leftClickHandler);
    this.startTimer();
  }

  componentDidUpdate(_prevProps: State, prevState: State) {
    const previousClockName = prevState.clockName;
    const currentClockName = this.state.clockName;

    if (previousClockName !== currentClockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from  ${previousClockName} to ${currentClockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    clearInterval(this.timeId);
    document.removeEventListener('contextmenu', this.rightClickHandler);
    document.removeEventListener('click', this.leftClickHandler);
  }

  leftClickHandler() {
    this.startTimer();
    this.setState({
      hasClock: true,
    });
  }

  rightClickHandler(event: MouseEvent) {
    event.preventDefault();
    this.setState({
      hasClock: false,
    });
    clearInterval(this.timerId);
    clearInterval(this.timeId);
  }

  startTimer() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
    this.timeId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  render() {
    if (this.state.hasClock) {
      return (
        <Clock
          name={this.state.clockName}
          today={this.state.today}
        />
      );
    }

    return null;
  }
}
