import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  timerId: number;
};

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.PureComponent<Props, State> {
  timerId?: number;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    if (event.button === 0) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount(): void {
    // This code starts a timer
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('mousedown', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('mousedown', this.handleLeftClick);
  }

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
