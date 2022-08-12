import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    clockName: getRandomName(),
    hasClock: true,
  };

  timerForClock = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      if (event.button === 2) {
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', (e) => {
      if (e.button === 0) {
        this.setState({ hasClock: true });
      }
    });

    this.timerForClock = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
