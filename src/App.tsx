import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

const startClockName = 'Clock-0';

export class App extends React.PureComponent<{}, State> {
  timerId = 0;

  state = {
    hasClock: true,
    clockName: startClockName,
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
          && <Clock name={clockName} /> }
      </div>
    );
  }
}
