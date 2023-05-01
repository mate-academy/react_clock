import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            clockName={this.state.clockName}
          />
        )}
      </div>
    );
  }
}
