/* eslint-disable no-console */
import { Component } from 'react';

import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockId = 0;

  componentDidMount() {
    this.clockId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handleLeftMouseClick);
    document.addEventListener('contextmenu', this.handleRightMouseClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleLeftMouseClick);

    document.removeEventListener('contextmenu', this.handleRightMouseClick);
    window.clearInterval(this.clockId);
  }

  handleLeftMouseClick = () => {
    this.setState({ hasClock: true });
  };

  handleRightMouseClick = (event: MouseEvent) => {
    this.setState({ hasClock: false });
    event.preventDefault();
  };

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
