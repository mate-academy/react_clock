import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <Clock />
        )}

        <div>
          {this.state.isClockVisible ? (
            <button
              type="button"
              onClick={() => this.setState(
                { isClockVisible: false },
              )}
            >
              Hide Clock
            </button>
          )
            : (
              <button
                type="button"
                onClick={() => this.setState({ isClockVisible: true })}
              >
                Show Clock
              </button>
            )}
        </div>
      </div>
    );
  }
}

export default App;
