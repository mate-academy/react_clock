import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  toggleClock = (value: boolean) => {
    this.setState({ isClockVisible: value });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          className="button"
          onClick={event => {
            event.preventDefault();
            this.toggleClock(!isClockVisible);
          }}
        >
          {isClockVisible ? 'Hide clock' : 'Show clock'}
        </button>

        {isClockVisible && <Clock />}
      </div>
    );
  }
}

export default App;
