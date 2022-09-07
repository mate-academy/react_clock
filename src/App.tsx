import React from 'react';
import './App.scss';
import { Clock } from './clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.rightMouseClick);
    document.addEventListener('click', this.leftMouseClick);
    this.timerId = window.setInterval(this.updateClockName, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.rightMouseClick);
    document.removeEventListener('click', this.leftMouseClick);
  }

  updateClockName = () => {
    const clockName = getRandomName();

    this.setState({ clockName });
  };

  rightMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  leftMouseClick = () => {
    this.setState({ hasClock: true });
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
