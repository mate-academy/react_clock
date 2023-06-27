import React from 'react';
import './App.scss';

import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  oldName = this.state.clockName;

  newName = '';

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    window.setInterval(() => {
      this.getRandomName();

      if (this.state.hasClock) {
        console.debug(`Renamed from ${this.oldName} to ${this.newName}`);
      }
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: State) {
    this.oldName = prevState.clockName;
    this.newName = this.state.clockName;
  }

  getRandomName(): void {
    const newClockName = `Clock-${Date.now().toString().slice(-4)}`;

    this.setState({ clockName: newClockName });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
