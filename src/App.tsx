import { Component } from 'react';

import './styles/imports.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  timerId: number,
};

export class App extends Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    timerId: 0,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (ev) => {
      ev.preventDefault();
      this.hideClock();
    });

    document.addEventListener('click', () => {
      this.appearClock();
    });

    this.state.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmpunt() {
    window.clearInterval(this.state.timerId);
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
      <div className="wrapper">
        <div className="App">
          <h1>React clock</h1>
          {hasClock && <Clock name={clockName} />}
        </div>
      </div>
    );
  }
}
