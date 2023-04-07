import React from 'react';
import './App.scss';

import { Clock } from './Components/Clock';

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

  clockNameTimerId = 0;

  componentDidMount() {
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);

    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.leftClick);
    document.removeEventListener('contextmenu', this.rightClick);

    clearInterval(this.clockNameTimerId);
  }

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
