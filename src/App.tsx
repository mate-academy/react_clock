import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 123,
  };

  randomNumber = () => {
    this.setState({
      clockName: Math.round(Math.random() * 1000),
    });
  };

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.randomNumber}
        >
          Set random name
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
        <div>
          {this.state.clockName}
        </div>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
