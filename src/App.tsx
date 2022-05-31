import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {

};

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<State, Props> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  componentDidUpdate(_prevProps: {}, prevState: State): void {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
  }

  // eslint-disable-next-line class-methods-use-this
  setRandom() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.setState({ clockName: this.setRandom() });
            }}
          >
            Set random name
          </button>
        </p>
      </div>
    );
  }
}

export default App;
