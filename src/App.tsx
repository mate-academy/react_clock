import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
    time: new Date(),
    clockName: 'Clock-0',
  };

  timerId = 0;

  //hide
  handleClickRight = () => {
    event.preventDefault(); // not to show the context menu

    this.setState({ hasClock: false });
  };

  handleClickLeft = () => {
    this.setState({ hasClock: true });
  };

  handleClockNameChange = () => {
    this.setState({ clockName: getRandomName() });
  };

  componentDidMount(): void {
    // This code starts a timer
    this.timerId = window.setInterval(this.handleClockNameChange, 3300);

    document.addEventListener('contextmenu', this.handleClickRight);

    document.addEventListener('click', this.handleClickLeft);
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleClickRight);
    document.removeEventListener('click', this.handleClickLeft);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
