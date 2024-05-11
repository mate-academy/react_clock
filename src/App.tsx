import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  handlerShowClock = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handlerHideClock = (evt: MouseEvent) => {
    evt.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    document.addEventListener('click', this.handlerShowClock);
    document.addEventListener('contextmenu', this.handlerHideClock);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.handlerShowClock);
    document.removeEventListener('contextmenu', this.handlerHideClock);
  }

  render(): React.ReactNode {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
