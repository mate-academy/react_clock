import React from 'react';
import { Clock } from './Clock/Clock';
import './App.scss';

interface State {
  clockName: string;
  currentTime: string;
  hasClock: boolean;
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
    hasClock: true,
  };

  componentDidMount(): void {
    window.setInterval(this.getRandomName, 3300);
    window.setInterval(this.handleClockUpdate, 1000);
    document.addEventListener('contextmenu', this.handleHasClockOff);
    document.addEventListener('click', this.handleHasClockOn);
  }

  componentWillUnmount(): void {
    window.clearInterval(window.setInterval(this.getRandomName, 3300));
    window.clearInterval(window.setInterval(this.handleClockUpdate, 1000));
  }

  getRandomName = (): void => {
    const value = Date.now().toString().slice(-4);

    this.setState({ clockName: `Clock-${value}` });
  };

  handleClockUpdate = (): void => {
    const time = new Date().toUTCString().slice(-12, -4);

    this.setState(
      { currentTime: time },
    );
  };

  handleHasClockOff = (rightClick: Event): void => {
    rightClick.preventDefault();
    this.setState({ hasClock: false });
  };

  handleHasClockOn = ():void => {
    this.setState({ hasClock: true });
  };

  render() {
    const {
      clockName,
      currentTime,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
        && <Clock name={clockName} time={currentTime} />}
      </div>
    );
  }
}
