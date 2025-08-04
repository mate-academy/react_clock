import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  timerId: number = 0;

  // This code starts a timer

  // const timerId = window.setInterval(() => {
  //   clockName = getRandomName();
  // }, 3300);

  // this code stops the timer
  // window.clearInterval(timerId);
  addClock = () => {
    this.setState({ hasClock: true });
  };

  removeClock = (event: Event) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.addClock);

    document.addEventListener('contextmenu', this.removeClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, today, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {/* <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div> */}
        {hasClock && <Clock name={clockName} today={today} />}
      </div>
    );
  }
}
