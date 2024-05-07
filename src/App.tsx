import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  timerId = 0;

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  pushRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  pushLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.pushLeftClick);
    document.addEventListener('contextmenu', this.pushRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.pushLeftClick);
    document.removeEventListener('contextmenu', this.pushRightClick);
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
