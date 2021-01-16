import React from 'react';

import Clock from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="App__clockface">
          <p>
            Current time:
            <br />
            {this.state.isClockVisible && <Clock name={this.state.clockName} />}
          </p>
        </div>
        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.random() });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
