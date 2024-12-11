import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timeClockNameId: number | undefined;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.timeClockNameId = window.setInterval(() => {
      const currentClockName = this.getRandomName();

      this.setState({ clockName: currentClockName });
    }, 3300);
  }

  componentDidUpdate(_: Readonly<Props>, prevState: Readonly<State>) {
    const oldName = prevState.clockName;
    const newName = this.state.clockName;

    const clockNameChanged = prevState.clockName !== this.state.clockName;

    if (clockNameChanged) {
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.warn(`Renamed from ${oldName} to ${newName}`);
      }
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeClockNameId);

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock name={this.state.clockName} hasClock={this.state.hasClock} />
        )}
      </div>
    );
  }
}
