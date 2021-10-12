import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: number,
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  componentDidUpdate(_prevProps: Readonly<{}>, prevState: Readonly<State>) {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  randomName() {
    this.setState({
      clockName: Math.floor(Math.random() * (100 - 1)) + 1,
    });
  }

  showClock() {
    if (!this.state.isClockVisible) {
      this.setState({
        isClockVisible: true,
      });
    }
  }

  hideClock() {
    if (this.state.isClockVisible) {
      this.setState({
        isClockVisible: false,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          onClick={() => this.hideClock()}
          type="button"
        >
          Hide
        </button>
        {'   '}
        <button
          onClick={() => this.showClock()}
          type="button"
        >
          Show
        </button>
        {'    '}
        <button onClick={() => this.randomName()} type="button">Random name</button>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
