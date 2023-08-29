import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    // This code starts a timer
    document.addEventListener('click', this.handleMouseClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }
  // this code stops the timer

  componentWillUnmount() {
    document.removeEventListener('click', this.handleMouseClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    window.clearInterval(this.timerId);
  }

  handleMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
          && <Clock hasClock={hasClock} clockName={clockName} />}
      </div>
    );
  }
}
