import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  // eslint-disable-next-line class-methods-use-this
  randomizer() {
    return Math.round(Math.random() * 1000);
  }

  render() {
    return (
      <div className="App content has-text-centered">
        <h1>React clock</h1>
        <p>{`Clock name: ${this.state.clockName}`}</p>

        {this.state.isClockVisible && (
          <Clock name={this.state.clockName} />
        )}

        <button
          className="button is-success mr-4"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          className="button is-danger mr-4"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          className="button is-warning"
          type="button"
          onClick={() => {
            this.setState({ clockName: this.randomizer() });
          }}
        >
          Set Random Name
        </button>
      </div>
    );
  }
}

export default App;
