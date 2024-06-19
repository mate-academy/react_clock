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

  //#region handles
  handleShowClock() {
    document.addEventListener('click', () => {
      if (!this.state.hasClock) {
        this.setState({ hasClock: true });
      }
    });
  }

  handleHideClock() {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
    });
  }

  handleTimer() {
    this.timerIdName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  handleClearTimer() {
    window.clearInterval(this.timerIdName);
  }

  handleClearEvents() {
    document.removeEventListener('click', this.handleShowClock);
    document.removeEventListener('contextmenu', this.handleShowClock);
  }
  //#endregion

  componentDidMount(): void {
    this.handleShowClock();
    this.handleHideClock();
    this.handleTimer();
  }

  componentWillUnmount(): void {
    this.handleClearTimer();
    this.handleClearEvents();
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
