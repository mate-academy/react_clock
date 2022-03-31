import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    visibleClock: true,
  };

  toggleClock = (value: boolean) => {
    this.setState({ visibleClock: value });
  };

  render() {
    const { visibleClock } = this.state;

    return (
      <div className="App">
        <p className="title">
          React clock
        </p>
        <button
          type="button"
          className="button"
          onClick={() => {
            this.toggleClock(!visibleClock);
          }}
        >
          {visibleClock ? 'Hide clock' : 'Show clock'}
        </button>
        <p className="time">
          {visibleClock && <Clock />}
        </p>
      </div>
    );
  }
}

export default App;
