import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  timerIdCallback = () => {
    this.setState({
      clockName: this.getRandomName(),
    });
  };

  timerId = window.setInterval(this.timerIdCallback, 3300);

  // This code starts a timer
  handleTimer = () => {
    return this.timerId;
  };

  hiddenClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  hiddenListener = () => {
    return window.addEventListener('contextmenu', this.hiddenClock);
  };

  handleContextMenu = () => {
    return this.hiddenListener();
  };

  showClock = (event: MouseEvent) => {
    if (event.button === 0) {
      this.setState({
        hasClock: true,
      });
    }
  };

  showClockListener = () => {
    return window.addEventListener('click', this.showClock);
  };

  handleClick = () => {
    return this.showClockListener();
  };

  // this code stops the timer

  mount() {
    this.handleTimer();
    this.handleContextMenu();
    this.handleClick();
  }

  unmount() {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.hiddenClock);
    window.removeEventListener('click', this.showClock);
  }

  componentDidMount() {
    this.mount();
  }

  componentWillUnmount() {
    this.unmount();
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
