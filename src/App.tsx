import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('contextmenu', this.rightClick);
    document.addEventListener('click', this.leftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId);
    document.addEventListener('contextmenu', this.rightClick);
    document.addEventListener('click', this.leftClick);
  }

  rightClick = (event: Event) => {
    event.preventDefault();
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  leftClick = (event: Event) => {
    event.preventDefault();

    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}
