import React from 'react';
import Clock from './Components/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppProps = {};

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<AppProps, AppState> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  switchClockState(state: boolean) {
    this.setState({
      hasClock: state,
    });
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', () => {
      this.switchClockState(true);
    });

    document.addEventListener('contextmenu', e => {
      e.preventDefault();
      this.switchClockState(false);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', () => {
      this.switchClockState(true);
    });

    document.removeEventListener('contextmenu', () => {
      this.switchClockState(false);
    });

    window.clearInterval(this.timerId);
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
