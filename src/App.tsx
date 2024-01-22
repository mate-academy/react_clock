import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    // This code starts a timer
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      const time = this.getRandomName();

      this.setState({ clockName: time });
    }, 3300);
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
