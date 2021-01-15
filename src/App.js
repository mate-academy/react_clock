import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    isClockVisible: false,
    clockName: null,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          time={this.state.time}
          name={this.state.clockName}
          isClockVisible={this.state.isClockVisible}
        />
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
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: pickRandomName() });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

function pickRandomName() {
  return new Date().getMilliseconds();
}

export default App;
