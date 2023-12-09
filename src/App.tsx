import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { AppState } from './types';

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: App.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handlerClockOff);

    document.addEventListener('click', this.handlerClockOn);
  }

  componentDidUpdate(_: {}, prevState: AppState):void {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handlerClockOff);
    document.removeEventListener('click', this.handlerClockOn);
  }

  handlerClockOff = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handlerClockOn = () => {
    this.setState({ hasClock: true });
  };

  static getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
