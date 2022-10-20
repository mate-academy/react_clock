import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      this.hideClock(event, false);
    });

    document.addEventListener('click', (event) => {
      this.hideClock(event, true);
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  hideClock = (event: MouseEvent, value: boolean) => {
    event.preventDefault();
    this.setState({ hasClock: value });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
