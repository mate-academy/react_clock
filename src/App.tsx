import { Component } from 'react';
import { Clock } from './components/Clock';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string;
};

document.documentElement.oncontextmenu = (event: MouseEvent) => {
  event.preventDefault();
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  timerUpdateName = 0;

  componentDidMount() {
    document.addEventListener('mousedown', (event: MouseEvent) => {
      // eslint-disable-next-line
      return event.button === 0
        ? this.setState({ hasClock: true })
        : this.setState({ hasClock: false });
    });

    this.timerUpdateName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerUpdateName);
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
