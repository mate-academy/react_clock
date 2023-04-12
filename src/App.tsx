/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerID = 0;

  componentDidMount() {
    window.addEventListener('click', this.clockShow);
    window.addEventListener('contextmenu', this.clockShow);

    this.timerID = window.setInterval(() => {
      this.setState(({ clockName: getRandomName() }
      ));
    }, 3300);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.hasClock === true
      && this.state.clockName !== prevState.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }

    return prevProps;
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    window.addEventListener('click', this.clockShow);
    window.addEventListener('contextmenu', this.clockShow);
  }

  clockShow = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: e.button !== 2 });
  };

  render(): React.ReactNode {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
