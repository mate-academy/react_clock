import React from 'react';
import { Clock } from './Components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    return (
      <div className="App">

        {this.state.isClockVisible
        && <h1>React clock</h1>}
        <p>
          Current time:
          {this.state.isClockVisible
            ? <Clock {...this.state} />
            : 'timer stopped'}
        </p>
        <div>
          <button
            type="button"
            onClick={() => (
              this.setState({
                isClockVisible: true,
              })
            )}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={() => this.setState({
              isClockVisible: false,
            })}
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={() => this.setState({
              clockName: Math.floor(Math.random() * 100),
            })}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
