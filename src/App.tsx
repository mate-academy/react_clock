import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string
}

export class App extends React.Component<{}, State> {

  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0'
  }

  handleShowClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  }

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  }

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName()});
    }, 3300);

    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock)
  }

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock)
  }


render() {
  return (
    <div className="App">
      <h1>React clock</h1>
      {this.state.hasClock && <Clock clockName={this.state.clockName}/>}
    </div>
  );
}
};
