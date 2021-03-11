import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 33,
  }

  clockHandler = () => (
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }))
  )

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          <button
            type="button"
            onClick={this.clockHandler}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.clockHandler}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => (
              this.setState({ clockName: Math.ceil(Math.random() * 100) })
            )}
          >
            Set random name
          </button>
        </p>
        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}

export default App;
