import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible } = this.state;
    const updateClockName = Math.floor(Math.random() * 100);

    return (
      <div className="App">
        <h1>React Clock</h1>
        <p className="clock">
          Current time:
          {' '}
          {isClockVisible && <Clock name={this.state.clockName} />}
        </p>
        <button
          type="button"
          className="App__button1"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="App__button2"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="App__button3"
          onClick={() => {
            this.setState({ clockName: updateClockName });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
