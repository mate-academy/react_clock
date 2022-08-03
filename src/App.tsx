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

    document.addEventListener('contextmenu', this.handleContextEvent);
    document.addEventListener('click', this.handleClickEvent);
  }

  setTimer = () => {
    return window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  handleClickEvent = () => {
    this.setState({ hasClock: true });
  };

  handleContextEvent = () => {
    this.setState({ hasClock: false });
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
