import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string,
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  today = new Date();

  timerName = 0;

  componentDidMount() {
    this.timerName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleShowClock);
    document.addEventListener('contextmenu', this.handleHideClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerName);
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleHideClock);
  }

  handleShowClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
