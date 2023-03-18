import { Component } from 'react';

import './App.scss';
import { Clock } from './components/Clock/Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, AppState> {
  intervalID: number | undefined;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    this.intervalID = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', this.stateSet);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalID);
    document.removeEventListener('click', this.stateSet);
  }

  stateSet = () => {
    this.setState({ hasClock: true });
  };

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
