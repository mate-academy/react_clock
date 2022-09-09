import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean
  clockName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      if (event) {
        this.setState({ hasClock: false });
      }
    });

    document.addEventListener('click', (event) => {
      if (event) {
        this.setState({ hasClock: true });
      }
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
          && (
            <div className="Clock">
              <strong className="Clock__name">
                {clockName}
              </strong>
              {' time is '}
              <Clock clockName={clockName} />
            </div>
          )}
      </div>
    );
  }
}
