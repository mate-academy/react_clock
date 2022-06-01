import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="title is-3 m-5 has-text-danger">React clock</h1>
        <p className="button is-danger is-inverted ml-2">
          Current time:
          {isClockVisible && <Clock /> }
        </p>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="button is-danger is-light ml-3"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;
