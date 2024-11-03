import { Component } from 'react';
import './App.scss';
import Clock from './components/Clock';

import { getRandomName } from './utils/getRandomName';

interface IState {
  hasClock: boolean;
  clockName: string;
}

export class App extends Component<{}, IState> {
  state = { hasClock: true, clockName: 'Clock-0' };

  timerId = 0;

  startTimer = () => {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  stopTimer = () => clearInterval(this.timerId);

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleShowClock = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.startTimer();
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
  }

  componentWillUnmount(): void {
    this.stopTimer();
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
