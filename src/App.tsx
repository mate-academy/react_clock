import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: getRandomName(),
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = this.setTimer();

    document.addEventListener('contextmenu', this.contextEvent);
    document.addEventListener('click', this.clickEvent);
  }

  setTimer = () => {
    return window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  clickEvent = () => {
    this.setState({ hasClock: true });
    this.timerId = this.setTimer();
  };

  contextEvent = () => {
    this.setState({ hasClock: false });
    window.clearInterval(this.timerId);
  };

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
