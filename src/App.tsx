/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: getRandomName(),
    hasClock: true,
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', (event) => {
      event.preventDefault();

      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
    const prevName = prevState.clockName;
    const newName = this.state.clockName;

    if (prevName !== newName) {
      console.log(`Renamed from ${prevName} to ${newName}`);
    }
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
