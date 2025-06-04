import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

type State = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleHideClock = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  handleShowClock = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);

    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          {this.state.hasClock && <Clock name={this.state.clockName} />}
        </div>
      </div>
    );
  }
}
