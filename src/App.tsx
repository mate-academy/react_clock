import { Component } from 'react';

import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state = {
    clockName: getRandomName(),
    hasClock: true,
  };

  randomName = 0;

  componentDidMount() {
    this.randomName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_prevProps: unknown, prevState: { clockName: unknown; }) {
    // eslint-disable-next-line no-console
    console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
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
