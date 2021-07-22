import React from 'react';
import { Clock } from './components/Clock';
import giphy from './image/giphy.gif';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 1,
    isClockVisible: true,
  };

  showClock() {
    this.setState({ isClockVisible: true });
  }

  hideClock() {
    this.setState({ isClockVisible: false });
  }

  changeName() {
    this.setState({ clockName: Math.round(Math.random() * 100) });
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App card">
        <h1 className="title">REACT CLOCK</h1>
        {
          isClockVisible
            ? <Clock name={clockName} />
            : <img className="img" src={giphy} alt="no time" />
        }

        <button
          className="button"
          type="button"
          onClick={() => {
            this.showClock();
          }}
        >
          Show Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.hideClock();
          }}
        >
          Hide Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.changeName();
          }}
        >
          Change my name
        </button>
      </div>
    );
  }
}

export default App;
