import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimer = 0;

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  startNameTimer = (): void => {
    this.clockNameTimer = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  };

  handleLeftClick = (event: MouseEvent): void => {
    event.preventDefault();

    if (this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: true });
    this.startNameTimer();
  };

  handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();

    if (!this.state.hasClock) {
      return;
    }

    this.setState({ hasClock: false });
    window.clearInterval(this.clockNameTimer);
  };

  componentDidMount(): void {
    this.startNameTimer();

    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimer);
  }

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
