import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: '',
  }

  render() {
    return (

      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          { this.state.isClockVisible
          && (<Clock name={this.state.clockName} />) }
          <br />
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
            }
          }
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ clockName: (Math.random()).toString() });
            }
          }
          >
            Set random name
          </button>
        </p>
      </div>
    );
  }
}

export default App;
