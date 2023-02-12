import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

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
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    window.addEventListener('contextmenu', this.rightMouseClick);
    window.addEventListener('click', this.leftMouseClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.removeEventListener('contextmenu', this.leftMouseClick);
    window.removeEventListener('click', this.leftMouseClick);
  }

  leftMouseClick = () => {
    this.setState({ hasClock: true });
  };

  rightMouseClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
