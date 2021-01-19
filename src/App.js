import React from 'react';

import Clock from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: 1,
    clockName: 3.14,
  };

  switchClock = (buttonName) => {
    this.setState({ isClockVisible: buttonName === 'Show Clock' ? 1 : false });
  }

  getRandomName = () => {
    const { clockName } = this.state;
    const prevName = clockName;
    const newName = Math.random();
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${prevName} to ${newName}`);
    this.setState({ clockName: newName });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="App__clockface">
          <p>
            Current time:
            <br />
            {this.state.isClockVisible && <Clock />}
          </p>
        </div>
        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={(event) => {
              this.switchClock(event.target.innerText);
            }}
          >
            Show Clock
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.switchClock}
          >
            Hide Clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.getRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
