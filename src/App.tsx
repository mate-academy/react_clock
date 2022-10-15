import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.addClock();
    });

    document.addEventListener('click', () => {
      this.removeClock();
    });

    this.clockNameId = window.setInterval(() => {
      this.updateClock();
    }, 3300);
  }

  componentDidUpdate(_: never, prevState: State) {
    const { hasClock, clockName } = this.state;

    if (clockName !== prevState.clockName && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  addClock = () => {
    this.setState({ hasClock: false });
  };

  removeClock = () => {
    this.setState({ hasClock: true });
  };

  updateClock = () => {
    this.setState({ clockName: getRandomName() });
  };

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
