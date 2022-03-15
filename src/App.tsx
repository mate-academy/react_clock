import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    name: 7,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible
            && <Clock name={this.state.name} />}
          <div>
            <button
              type="button"
              onClick={() => this.setState({ isClockVisible: true })}
            >
              Show clock
            </button>
            <button
              type="button"
              onClick={() => this.setState({ isClockVisible: false })}
            >
              Hide clock
            </button>
            <button
              type="button"
              onClick={() => this.setState({ name: Math.random() })}
            >
              Set a random name
            </button>
          </div>
        </p>
      </div>
    );
  }
}

type State = {
  isClockVisible: boolean,
  name: number
};

type Props = {};

export default App;
