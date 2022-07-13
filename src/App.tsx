/* eslint-disable no-console */
import React from 'react';
import './App.scss';

import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  // componentDidUpdate(_: any, prevState: State) {
  //   console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
  // }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock
          && (
            <Clock clockName={clockName} />
          )
        }
      </div>
    );
  }
}

export default App;
