import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean;
  name: number
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    name: Math.floor(Math.random() * 100),
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (<Clock name={this.state.name} />)}
        </p>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ name: Math.floor(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
