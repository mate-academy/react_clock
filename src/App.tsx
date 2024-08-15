import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

type State = {
  isClock: boolean;
  clockName: string;
  // today: Date;
  // currentTime: string;
};

export class App extends React.Component<{}, State> {
  getCurrentTime = (date: Date) => {
    return date.toUTCString().slice(-12, -4);
  };

  state = {
    isClock: true,
    clockName: 'Clock-0',
  };

  // today: new Date(),
  // currentTime: this.getCurrentTime(new Date()),

  nameTimerId = 0;

  // timerId = 0;

  componentDidMount(): void {
    // this.timerId = window.setInterval(this.updateTime, 1000);
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: `Clock-${Date.now().toString().slice(-4)}` });
    }, 3300);
    document.addEventListener('click', this.documentClickHandler);
    document.addEventListener('contextmenu', this.contextMenuHandler);
  }

  // componentDidUpdate(
  //   _prevProps: Readonly<{}>,
  //   prevState: Readonly<State>,
  // ): void {
  //   if (prevState.clockName !== this.state.clockName) {
  //     // eslint-disable-next-line no-console
  //     console.debug(
  //       `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
  //     );
  //   }
  // }

  componentWillUnmount(): void {
    // this.clearTimers();
    // clearInterval(this.updateTimeTimerId);
    clearInterval(this.nameTimerId);
    document.removeEventListener('click', this.documentClickHandler);
    document.removeEventListener('contextmenu', this.contextMenuHandler);
  }

  // startTimers = () => {
  //   this.updateTimeTimerId = window.setInterval(this.updateTime, 1000);
  //   this.clockNameTimerId = window.setInterval(this.setClockName, 3300);
  // };

  // clearTimers = () => {
  //   clearInterval(this.updateTimeTimerId);
  //   clearInterval(this.clockNameTimerId);
  // };

  setClockName = () => {};

  documentClickHandler = () => {
    if (!this.state.isClock) {
      this.setState({ isClock: true });
    }
  };

  contextMenuHandler = () => {
    if (this.state.isClock) {
      this.setState({ isClock: false });
    }
  };

  // updateTime = () => {
  //   const currentTime = this.getCurrentTime(new Date());

  //   this.setState({ currentTime });

  //   if (this.state.isClock) {
  //     // eslint-disable-next-line no-console
  //     console.log(currentTime);
  //   }
  // };

  render() {
    const { clockName, isClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
