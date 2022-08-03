import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    window.addEventListener('contextmenu', () => {
      this.setState({
        hasClock: false,
      });
    });

    window.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: State) {
    // eslint-disable-next-line no-console
    console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  render() {
    return (this.state.hasClock && (
      <div className="App">
        <h1>React clock</h1>

        <Clock name={this.state.clockName} />
      </div>
    )
    );
  }
}
