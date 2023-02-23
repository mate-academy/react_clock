import { Component } from 'react';

import './App.scss';
import { Clock } from './components/Clock/Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  return `Clock-${Math.floor(Math.random() * 100)}`;
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

      // eslint-disable-next-line no-console
      console.debug(`Generated new clock name: ${newName}`);
      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
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
