import React from 'react';
import Clock from '../Clock/Clock';
import './App.scss';

type State = {
  visibleClock: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    visibleClock: true,
    clockName: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.visibleClock && <Clock name={this.state.clockName} />}
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.setState({ visibleClock: true })}
          >
            show clock
          </button>
          <button
            type="button"
            onClick={() => this.setState({ visibleClock: false })}
          >
            hide clock
          </button>
          <button
            type="button"
            onClick={() => this.setState({ clockName: Math.round(Math.random() * 100) })}
          >
            set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
