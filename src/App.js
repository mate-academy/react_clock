import React from 'react';
import { Clock } from './component/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
    oldClockName: 0,
  }

  getRandomInt() {
    const { clockName, oldClockName } = this.state;

    this.setState(prevState => (
      {
        oldClockName: prevState.clockName,
        clockName: Math.floor(Math.random() * Math.floor(10)),
      }
    ));
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldClockName} to ${clockName}`)
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
        </h1>

        <p>
          Current time:
          {isClockVisible && (
            <Clock
              isClockVisible={isClockVisible}
            />
          )}

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show Clock
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.setState({ isClockVisible: false })}
          >
            Hide Clock
          </button>
        </p>

        <p>
          <button
            className="button"
            type="button"
            onClick={() => this.getRandomInt()}
          >
            Set random name
          </button>
        </p>
      </div>
    );
  }
}

export default App;
