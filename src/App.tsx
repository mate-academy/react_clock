import { Component } from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

export class App extends Component {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
