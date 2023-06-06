import './App.scss';
import React from 'react';
import { Clock } from './Component/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      this.setState({
        hasClock: false,
      });
    });

    document.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });
  }

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock
          ? <Clock clockName={clockName} />
          : null}
      </div>
    );
  }
}
