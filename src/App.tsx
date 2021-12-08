import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean
  clockName: number
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    return (
      <>
        {this.state.isClockVisible ? (
          <div className="App">
            <h1>{this.state.clockName}</h1>
            <p>
              Current time:
              {' '}
              <Clock name={this.state.clockName} />
            </p>
          </div>
        )
          : null}

        <button
          type="button"
          className="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>

        <button
          type="button"
          className="button"
          onClick={() => this.setState({ clockName: Math.floor(Math.random() * 100) })}
        >
          Set name
        </button>
      </>
    );
  }
}

export default App;
