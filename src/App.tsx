import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

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

  timerForClockName = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
    document.addEventListener('contextmenu', this.handleAddClock);
    document.addEventListener('click', this.handleRemoveClock);
  }

  handleAddClock = () => {
    this.setState({ hasClock: false });
  };

  handleRemoveClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
        && <Clock name={clockName} />}
      </div>
    );
  }
}
