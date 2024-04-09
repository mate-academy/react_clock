import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';
import { getRandomName } from './utils/getRandomName';

export class App extends React.Component {
  timerId = 0;

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleCloseClock);
    document.addEventListener('click', this.handleOpenClock);
  }

  handleCloseClock = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  handleOpenClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock name={clockName} visible={hasClock} timerId={this.timerId} />
      </div>
    );
  }
}
