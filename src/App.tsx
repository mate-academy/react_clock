import React from 'react';
import './App.scss';

type State = {
  time: Date;
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    time: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  timerNameId = 0;

  TIME_INTERVAL = 1000;

  NAME_INTERVAL = 3300;

  getRandomName = (): string => {
    return `Clock-${Date.now().toString().slice(-4)}`;
  };

  setRandomClockName = (): void => {
    const newClockName = this.getRandomName();

    if (this.state.clockName !== newClockName) {
      this.setState({ clockName: newClockName });
    }
  };

  setCurrentTime = (): void => {
    const currentTime = new Date();

    if (this.state.time !== currentTime) {
      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
      this.setState({ time: currentTime });
    }
  };

  setIntervals = (): void => {
    this.timerId = window.setInterval(this.setCurrentTime, this.TIME_INTERVAL);

    // this.timerNameId = window.setInterval(
    //   this.setRandomClockName,
    //   this.NAME_INTERVAL,
    // );
  };

  clearIntervals = (): void => {
    window.clearInterval(this.timerId);
    // window.clearInterval(this.timerNameId);
  };

  handleMouseRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
      this.clearIntervals();
    }
  };

  handleMouseLeftClick = (event: MouseEvent): void => {
    event.preventDefault();
    if (!this.state.hasClock) {
      this.setState({
        hasClock: true,
        time: new Date(),
      });
      this.setIntervals();
    }
  };

  componentDidMount = (): void => {
    this.setIntervals();
    this.timerNameId = window.setInterval(
      this.setRandomClockName,
      this.NAME_INTERVAL,
    );

    document.addEventListener('contextmenu', this.handleMouseRightClick);
    document.addEventListener('click', this.handleMouseLeftClick);
  };

  componentDidUpdate = (_prevProps: {}, prevState: State): void => {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  };

  componentWillUnmount = (): void => {
    this.clearIntervals();
    window.clearInterval(this.timerNameId);
    document.removeEventListener('contextmenu', this.handleMouseRightClick);
    document.removeEventListener('click', this.handleMouseLeftClick);
  };

  render() {
    const { time, hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {time.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
