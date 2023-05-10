import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

interface State {
  clockName: string,
  isClockShown: boolean,
}

export class App extends React.Component <Props, State> {
  state = {
    clockName: 'Clock-0',
    isClockShown: true,
  };

  timerId = 0;

  componentDidMount(): void {
    window.addEventListener('click', this.showClock);
    window.addEventListener('contextmenu', this.hideClock);

    // This code starts a timer
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);
    window.removeEventListener('click', this.showClock);
    window.removeEventListener('contextmenu', this.hideClock);
  }

  showClock = (event:Event) => {
    event.preventDefault();
    this.setState({
      isClockShown: true,
    });
  };

  hideClock = (event:Event) => {
    event.preventDefault();
    this.setState({
      isClockShown: false,
    });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockShown && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
