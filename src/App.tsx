import { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerNameId = 0;

  componentDidMount() {
    this.timerNameId = window.setInterval(() => {
      getRandomName();
    }, 3300);

    document.addEventListener('contextmenu', this.changeClockState);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerNameId);

    document.removeEventListener('contextmenu', this.changeClockState);
  }

  changeClockState(event: Event) {
    event.preventDefault();
    const swapValue = () => !this.state.hasClock;

    this.setState({ hasClock: swapValue() });
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
