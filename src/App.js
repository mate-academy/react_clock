import React from 'react';
import Clock from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    show: true,
    clockName: Math.random(),
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.show && <Clock {...this.state} />}
        </p>

        <button
          type="button"
          onClick={() => this.setState({ show: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ show: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.random() });

            return <Clock name={this.state.clockName} />;
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
