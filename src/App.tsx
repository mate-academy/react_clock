import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

type Props = {};

let timerId: number | null = null;

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    this.makeRenameInterval();

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState((previousState) => ({ ...previousState, hasClock: false }));
      window.clearInterval(timerId as number);
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      if (!this.state.hasClock) {
        this.setState((previousState) => ({
          ...previousState,
          hasClock: true,
        }));
        this.makeRenameInterval();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', () => { });
    document.removeEventListener('click', () => { });
  }

  makeRenameInterval() {
    clearInterval(timerId as number);
    timerId = window.setInterval(() => {
      const clockName = getRandomName();

      /* eslint-disable no-console */
      console.debug(`Renamed from ${this.state.clockName} to ${clockName}`);
      this.setState((previousState) => ({ ...previousState, clockName }));
    }, 3300);
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
