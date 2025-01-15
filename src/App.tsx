import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  currentName = 0;

  turnOffTimer = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  turnOnTimer = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.currentName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.turnOnTimer);
    document.addEventListener('contextmenu', this.turnOffTimer);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.currentName);

    document.removeEventListener('click', this.turnOnTimer);
    document.removeEventListener('contextmenu', this.turnOffTimer);
  }

  componentDidUpdate({}, prevState: Readonly<State>): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
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
