import React from 'react';
import './App.scss';

export class Clock extends React.Component<{ clockName: string }> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timeId = 0;

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  // const today = new Date();
  state = {
    clockName: 'Clock-0',
  };

  // This code starts a timer
  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  // this code stops the timer
  // window.clearInterval(timerId);

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock clockName={clockName} />
      </div>
    );
  }
}
