import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  dayId = 0;

  timerId = 0;

  componentDidMount(): void {
    this.dayId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dayId);
    window.clearInterval(this.timerId);
  }

  render() {
    const { today, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock clockName={clockName} today={today} />
      </div>
    );
  }
}
