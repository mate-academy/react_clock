import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
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
      window.console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.clockNameId);
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

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
