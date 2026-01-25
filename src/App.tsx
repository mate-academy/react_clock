import React from 'react';
import './App.scss';
import { Clock } from './components/clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  // This code starts a timer
  timerId = 0;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.timerId = window.setInterval(() => {
      const clockName = getRandomName();

      this.setState({ clockName });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
}
