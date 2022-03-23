import React from 'react';
import './App.scss';
import Clock from './Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  randomNumber() {
    const randomNum = Math.floor(Math.random() * 10);

    this.setState({ clockName: randomNum });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}

          <div>
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
              }}
            >
              Hide Clock
            </button>
            <br />
            <button
              type="button"
              onClick={() => {
                this.randomNumber();
              }}
            >
              Set random name
            </button>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
