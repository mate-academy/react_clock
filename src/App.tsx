import React from 'react';
import './App.scss';

import { Clock } from './Components/Clock/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  visible = () => {
    this.setState({ isClockVisible: true });
  };

  hidden = () => {
    this.setState({ isClockVisible: false });
  };

  randomName = () => {
    this.setState({ clockName: Math.round(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <p>
            <Clock clockName={this.state.clockName} />
          </p>
        )}
        <button
          type="button"
          onClick={this.visible}
          disabled={this.state.isClockVisible}
        >
          Show
        </button>
        <button
          type="button"
          onClick={this.hidden}
          disabled={!this.state.isClockVisible}
        >
          Hide
        </button>
        <button
          type="button"
          onClick={this.randomName}
        >
          Random name
        </button>
      </div>
    );
  }
}

export default App;
