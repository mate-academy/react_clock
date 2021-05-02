import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 100),
  }

  showClock = () => (
    this.setState({ isClockVisible: true })
  )

  hideClock = () => (
    this.setState({ isClockVisible: false })
  )

  changeName = () => (
    this.setState({ clockName: Math.round(Math.random() * 100) })
  )

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div clockName="clock">
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </div>
        <h1><i>{this.state.clockName}</i></h1>
        <button
          type="button"
          className="button button__show"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="button button__hide"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="button button__change"
          onClick={this.changeName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
