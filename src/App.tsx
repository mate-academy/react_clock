import React from 'react';
import './App.scss';
import { Counter } from './Counter';

class App extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    time: new Date().toLocaleTimeString(),
    // eslint-disable-next-line react/no-unused-state
    timerId: undefined,
    // eslint-disable-next-line react/no-unused-state
    isCounterVisible: true,
  };

  timerId?: NodeJS.Timer ;

  // eslint-disable-next-line react/no-typos
  componentWillUnMount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isCounterVisible && (
          <Counter />
        )}

        <div>
          <button
            type="button"
            onClick={() => this.setState({ isCounterVisible: false })}
          >
            Hide Clock
          </button>
        </div>
        <br />
        <div>
          <button
            type="button"
            onClick={() => this.setState({ isCounterVisible: true })}
          >
            Open Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
