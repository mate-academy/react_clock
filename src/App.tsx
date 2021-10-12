import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockName: number,
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  componentDidUpdate(_prevProps: Readonly<State>, prevState: Readonly<State>) {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 10),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <p>
            <Clock name={this.state.clockName} />
          </p>
        )}
        <button
          onClick={() => this.hideClock()}
          type="button"
        >
          Hide Clock
        </button>
        <button
          onClick={() => this.showClock()}
          type="button"
        >
          Show Clock
        </button>
        <button
          onClick={() => this.randomName()}
          type="button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
