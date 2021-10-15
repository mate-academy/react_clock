import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

class App extends React.Component<{}, { isClockVisible: boolean }> {
  state = {
    isClockVisible: false,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide clock
        </button>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock />}
        </p>
      </div>
    );
  }
}

export default App;
