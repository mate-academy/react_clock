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
    document.addEventListener('contextmenu', this.hideClock.bind(this, false));

    document.addEventListener('click', this.hideClock.bind(this, true));

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'contextmenu', this.hideClock.bind(this, false),
    );

    document.removeEventListener('click', this.hideClock.bind(this, true));
    clearInterval(this.timerId);
  }

  hideClock = (value: boolean, event: MouseEvent) => {
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
