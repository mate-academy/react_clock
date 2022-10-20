import React from 'react';
import './App.scss';
// import { Clock } from './Child';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: Readonly<{
    today: Date,
    clockName: string,
    visible: boolean,
  }> = {
    visible: true,
    today: new Date(),
    clockName: 'Clock-0',
  };

  timerToday = 0;

  timerClockName = 0;

  componentDidMount() {
    this.addSetIntervals();

    document.addEventListener('click', () => {
      this.setState({ visible: true });
      this.addSetIntervals();
    });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ visible: false });
      clearInterval(this.timerToday);
      clearInterval(this.timerClockName);
    });
  }

  newDate() {
    this.setState({ today: new Date() });
    // eslint-disable-next-line no-console
    console.info(this.state.today.toUTCString().slice(-12, -4));
  }

  newClockName() {
    const prev = this.state.clockName;

    this.setState({ clockName: getRandomName() });
    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prev} to ${this.state.clockName}`);
  }

  addSetIntervals() {
    this.timerToday = window.setInterval(() => this.newDate(), 1000);
    this.timerClockName = window.setInterval(() => this.newClockName(), 3300);
  }

  render(): React.ReactNode {
    const { clockName, today, visible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {visible
          ? (
            <div className="Clock">
              <strong className="Clock__name">
                {clockName}
              </strong>

              {' time is '}

              <span className="Clock__time">
                {today.toUTCString().slice(-12, -4)}
              </span>
            </div>
          )
          : ('')}
      </div>
    );
  }
}
