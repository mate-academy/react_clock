import React from 'react';

import './App.scss';
import { Clock } from './components/Clock/';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};
type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  intervalId = 0;

  showClock = () => {
    this.setState(prevState => {
      if (prevState.hasClock) {
        return null;
      } else {
        return { hasClock: true };
      }
    });
  };

  hideClock = () => {
    this.setState(prevState => {
      if (!prevState.hasClock) {
        return null;
      } else {
        return { hasClock: false };
      }
    });
  };

  componentDidMount = () => {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);

    this.intervalId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3_300);
  };

  componentWillUnmount = () => {
    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.showClock);

    window.clearInterval(this.intervalId);
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
