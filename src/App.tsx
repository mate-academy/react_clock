import { Component } from 'react';

import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', (ev) => {
      ev.preventDefault();
      this.hideClock();
    });

    document.addEventListener('click', () => {
      this.appearClock();
    });
  }

  componentWillUnmpunt() {
    clearInterval(this.timerId);
  }

  hideClock() {
    this.setState({ hasClock: false });
  }

  appearClock() {
    this.setState({ hasClock: true });
  }

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
