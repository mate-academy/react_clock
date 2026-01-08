import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {};
type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  private interval: number | null = null;

  componentDidMount(): void {
    this.startInterval();
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount(): void {
    this.stopInterval();
    document.removeEventListener('click', this.handleLeftClick);
    document.removeEventListener('contextmenu', this.handleRightClick);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }

  startInterval(): void {
    if (this.interval !== null) {
      return;
    }

    this.interval = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  stopInterval(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  handleLeftClick = (): void => {
    this.setState({ hasClock: true });
  };

  handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };
}
