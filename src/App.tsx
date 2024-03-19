import './App.scss';

import Clock from './components/Clock';
import React from 'react';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

type AppProps = {};

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<AppProps, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  id = 0;

  setClockSwitch(state: boolean) {
    this.setState({
      hasClock: state,
    });
  }

  componentDidMount() {
    this.id = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', () => {
      this.setClockSwitch(true);
    });

    document.addEventListener('contextmenu', e => {
      e.preventDefault();
      this.setClockSwitch(false);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', () => {
      this.setClockSwitch(true);
    });

    document.removeEventListener('contextmenu', () => {
      this.setClockSwitch(false);
    });

    window.clearInterval(this.id);
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
