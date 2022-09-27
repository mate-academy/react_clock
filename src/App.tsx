/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  hasClock: boolean,
  clockName: string
};

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.removeClock);
    document.addEventListener('click', this.addClock);
    this.timerId = window.setInterval(() => {
      const termName = this.state.clockName;

      this.setState({ clockName: getRandomName() });
      console.info(`Renamed from ${termName} to ${this.state.clockName}`);
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  addClock = () => {
    this.setState({ hasClock: true });
  };

  removeClock = (event:MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    const {
      hasClock,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
