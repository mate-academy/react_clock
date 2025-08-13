import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  clockName: string;
  hasClock: boolean;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  nameTimerId?: number;

  clockLCHandler = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  clockRCHandler = (event: MouseEvent) => {
    if (this.state.hasClock) {
      event.preventDefault();
      this.setState({ hasClock: false });
    }
  };

  componentDidMount() {
    window.addEventListener('click', this.clockLCHandler);
    window.addEventListener('contextmenu', this.clockRCHandler);

    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.clockLCHandler);
    window.removeEventListener('contextmenu', this.clockRCHandler);

    if (this.nameTimerId) {
      clearInterval(this.nameTimerId);
    }
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
