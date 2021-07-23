import React, { Component } from 'react';
import './App.scss';
import Clock from './components/Clock';

class App extends Component {
  state = {
    clockVisible: true,
    clockName: 0,
  }

  render() {
    const { clockVisible } = this.state;

    return (
      <div>
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockVisible: false });
          }}
        >
          Hide
        </button>
        <button
          type="button"
          onClick={() => {
            const randomName = Math.round(Math.random() * 333);

            this.setState({ clockName: randomName });
          }}
        >
          Random name
        </button>
        {clockVisible && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}

export default App;
