import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  nameChangeTimerId: number;
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component {
  state: State = {
    nameChangeTimerId: 0,
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleClockOnEvent = () => {
    const { hasClock } = this.state;

    if (!hasClock) {
      this.setState({ hasClock: true });
    }
  };

  handleClockOffEvent = (e: MouseEvent) => {
    e.preventDefault();

    const { hasClock } = this.state;

    if (hasClock) {
      this.setState({ hasClock: false });
    }
  };

  componentDidMount() {
    // This code starts a timer
    const timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    this.setState({ nameChangeTimerId: timerId });

    document.addEventListener('click', this.handleClockOnEvent);
    document.addEventListener('contextmenu', this.handleClockOffEvent);
  }

  componentWillUnmount() {
    // this code stops the timer
    window.clearInterval(this.state.nameChangeTimerId);
    document.removeEventListener('click', this.handleClockOnEvent);
    document.removeEventListener('contextmenu', this.handleClockOffEvent);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
