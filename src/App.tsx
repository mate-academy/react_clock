import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | null = null;

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  // This code starts a timer
  startTimer() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: this.getRandomName(),
      });
    }, 3300);
  }

  stopTimer() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.startTimer();
    window.addEventListener('click', this.handleLeftClick);
    window.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount(): void {
    this.stopTimer();
    window.removeEventListener('click', this.handleLeftClick);
    window.removeEventListener('contextmenu', this.handleRightClick);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
