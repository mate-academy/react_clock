import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  // This code starts a timer
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  // this code stops the timer
  componentWillUnmount() {
    clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
