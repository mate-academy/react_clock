import React from 'react';
import './App.scss';
import { Clock } from './componets/Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: getRandomName(),
  };

  intervalId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.stopClock);
    document.addEventListener('click', this.startClock);

    this.intervalId = this.createNameChangeIntervar();
  }

  componentDidUpdate(_: {}, prevState: { clockName: string }) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.stopClock);
    document.removeEventListener('click', this.startClock);
    clearInterval(this.intervalId);
  }

  stopClock = () => {
    this.setState({ hasClock: false });
    clearInterval(this.intervalId);
  };

  startClock = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true });

      this.intervalId = this.createNameChangeIntervar();
    }
  };

  createNameChangeIntervar(): number {
    return window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock name={this.state.clockName} />
        )}
        <p>Righ Click to stop, LeftClick - start</p>
      </div>
    );
  }
}

export default App;
