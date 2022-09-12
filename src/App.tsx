import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(this.updateClockName, 3300);

    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  updateClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (

      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
