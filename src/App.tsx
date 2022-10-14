import { Component } from 'react';
import './App.scss';

import { Clock } from './Components/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerIdName = 0;

  componentDidMount() {
    this.timerIdName = window.setInterval(() => {
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

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (this.state.hasClock
      && prevState.clockName !== this.state.clockName
    ) {
      window.console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
          && <Clock name={clockName} />}
      </div>
    );
  }
}
