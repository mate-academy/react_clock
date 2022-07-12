import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'initial',
  };

  timerId = 0;

  componentDidMount() {
    this.getRandomName();

    this.timerId = window.setInterval(this.getRandomName, 3300);

    document.addEventListener('contextmenu', this.hideClock);

    document.addEventListener('click', this.showClock);
  }

  componentDidUpdate(_: {}, prevState: State) {
    if (!this.state.hasClock) {
      clearInterval(this.timerId);
      this.timerId = 0;
    }

    if ((this.state.hasClock && !this.timerId)) {
      this.timerId = window.setInterval(this.getRandomName, 3300);
    }

    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  getRandomName = () => {
    const value = Math.random().toString().slice(2, 6);

    return this.setState({ clockName: value });
  };

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
