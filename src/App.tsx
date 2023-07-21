import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasVisibleClock: boolean;
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    hasVisibleClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.unhideClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.unhideClock);
  }

  unhideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasVisibleClock: true,
    });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasVisibleClock: false,
    });
  };

  render() {
    const { hasVisibleClock, clockName } = this.state;
    // const today = new Date();
    // let clockName = 'Clock-0';

    // // This code starts a timer
    // const timerId = window.setInterval(() => {
    //   clockName = getRandomName();
    // }, 3300);

    // // this code stops the timer
    // window.clearInterval(timerId);

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasVisibleClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
