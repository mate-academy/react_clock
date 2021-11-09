import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <>
        <div className="app">
          <h1>React clock</h1>
          <p>
            {
              this.state.isClockVisible
                ? <Clock name={this.state.clockName} />
                : 'Clock is hidden'
            }
          </p>
          <button
            type="button"
            className="app__button"
            onClick={this.showClock}
            disabled={this.state.isClockVisible}
          >
            Show clock
          </button>

          <button
            type="button"
            className="app__button"
            onClick={this.hideClock}
            disabled={!this.state.isClockVisible}
          >
            Hide clock
          </button>

          <button
            type="button"
            className="app__button"
            onClick={this.changeName}
          >
            Set random name
          </button>
        </div>
      </>
    );
  }
}

export default App;
