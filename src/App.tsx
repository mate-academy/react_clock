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

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleCloseClock);
    document.removeEventListener('click', this.handleOpenClock);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
