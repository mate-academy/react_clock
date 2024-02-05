import React from 'react';
import './App.scss';
import { Clock } from './Clock';

interface AppState {
  hasClock: boolean;
  clockName: string;
}

export class App extends React.PureComponent<{}, AppState> {
  state: AppState = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: App.getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  static getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  render() {
    const { hasClock, clockName } = this.state;

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
