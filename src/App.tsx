import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    const showHideClock = () => {
      this.setState({ isClockVisible: !isClockVisible });
    };

    return (
      <div className="app">
        <h1>React clock</h1>

        <button type="button" className="button" onClick={showHideClock}>
          {this.state.isClockVisible ? 'Hide clock' : 'Show clock'}
        </button>

        <div className="clock">
          <br />
          {isClockVisible && <Clock />}
        </div>
      </div>
    );
  }
}

export default App;
