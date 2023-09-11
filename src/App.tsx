import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.PureComponent<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdForClockName = 0;

  componentDidMount(): void {
    this.timerIdForClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerIdForClockName);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            setHasClock={(hasClock) => this.setState({ hasClock })}
            name={this.state.clockName}
          />
        )}
      </div>
    );
  }
}
