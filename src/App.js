import React from 'react';
import { Clock } from './Components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockVisible: true,
    clockName: 1,
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            {this.state.clockVisible
            && <Clock clockName={this.state.clockName} /> }
          </p>
          <button
            type="button"
            onClick={() => this.setState({ clockVisible: false })}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => this.setState({ clockVisible: true })}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.random() });
            }}
          >
            Set rundom name
          </button>
        </div>
      </>
    );
  }
}

export default App;
