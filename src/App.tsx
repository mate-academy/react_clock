import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 100),
  };

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.setState({
              clockName: Math.round(Math.random() * 100),
            });
          }}
        >
          Set random name
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>
        <div>
          {this.state.isClockVisible
          && <Clock clockName={this.state.clockName} />}
        </div>
      </div>
    );
  }
}

export default App;
