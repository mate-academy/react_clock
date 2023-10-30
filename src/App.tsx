/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';
import { ClockName } from './components/ClocName';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock:boolean
  clockName: string
};
export class App extends React.Component<{}, State | Readonly<State>> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.startClockName();
    document.addEventListener('click', this.visiblClock);
    document.addEventListener('contextmenu', this.unvisiblClock);
  }

  componentWillUnmount() {
    this.stopClockName();
    document.removeEventListener('contextmenu', this.visiblClock);
    document.removeEventListener('contextmenu', this.unvisiblClock);
  }

  visiblClock = () => {
    this.setState({ hasClock: true });
  };

  unvisiblClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  startClockName() :void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  stopClockName() :void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <ClockName clockName={clockName} />}

      </div>
    );
  }
}
