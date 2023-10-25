import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  today: Date,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    today: new Date(),
    clockName: 'Clock-0',
  };

  dateTimerId = 0;

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({
      hasClock: true,
      today: new Date(),
    });
  };

  handleDateChange = () => {
    this.dateTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  };

  handleClockNameChange = () => {
    setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  handleDateTimerStop = () => {
    window.clearInterval(this.dateTimerId);
  };

  render() {
    const {
      hasClock,
      today,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            handleDateChange={this.handleDateChange}
            handleClockNameChange={this.handleClockNameChange}
            handleDateTimerStop={this.handleDateTimerStop}
            hideClock={this.hideClock}
            showClock={this.showClock}
            today={today}
            name={clockName}
          />
        )}
      </div>
    );
  }
}
