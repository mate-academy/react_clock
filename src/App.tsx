import React from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  hasClock: boolean;
  clockName: string,
};

const getRandomName = (): string => {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: getRandomName(),
  };

  intervalName = 0;

  componentDidMount() {
    window.addEventListener('contextmenu', () => {
      this.setState({
        hasClock: false,
      });
    });

    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });

    this.intervalName = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    if (!this.state.hasClock) {
      window.clearInterval(this.intervalName);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
