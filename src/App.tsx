import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: `Clock-0`,
  };

  clockNameIntervalId: number | undefined;

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount() {
    this.clockNameIntervalId = window.setInterval(() => {
      const oldClockName = this.state.clockName;
      const newClockName = getRandomName();

      this.setState({ clockName: newClockName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    if (this.state.clockName !== prevState.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameIntervalId);
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
