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

export class App extends React.Component<{}, Readonly<State>> {
  public readonly state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdName = 0;

  handleHideClock() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState(prev => ({ ...prev, hasClock: false }));
    });
  }

  handleShowClock() {
    document.addEventListener('click', () => {
      this.setState(prev => ({ ...prev, hasClock: true }));
    });
  }

  handleTimers() {
    this.timerIdName = window.setInterval(() => {
      this.setState(prev => ({ ...prev, clockName: getRandomName() }));
    }, 3300);
  }

  handleClearTimers() {
    window.clearInterval(this.timerIdName);
  }

  componentDidMount(): void {
    this.handleShowClock();
    this.handleHideClock();
    this.handleTimers();
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<Readonly<State>>,
  ): void {
    if (this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    this.handleClearTimers();
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleShowClock);
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
