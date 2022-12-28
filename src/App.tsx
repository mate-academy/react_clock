/* eslint-disable no-console */
import { Component, ReactNode } from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  clockName: string
  hasClock: boolean
};

export class App extends Component<{}, State> {
  static getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    window.setInterval(() => {
      this.setState({ clockName: App.getRandomName() });
    }, 3300);
  }

  render(): ReactNode {
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
