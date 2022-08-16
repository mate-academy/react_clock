import { Component } from 'react';
import './App.scss';

import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClockHandler);
    document.addEventListener('click', this.showClockHandler);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideClockHandler);
    document.removeEventListener('click', this.showClockHandler);
    window.clearInterval(this.timerId);
  }

  hideClockHandler = (eventClick: MouseEvent) => {
    eventClick.preventDefault();
    this.setState({ hasClock: false });
  };

  showClockHandler = () => {
    this.setState({ hasClock: true });
  };

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
