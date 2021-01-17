import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'Clock',
  };

  show = () => {
    // Probably it should not print the same time several times
    this.state.isClockVisible || this.setState({ isClockVisible: true });
  };

  hide = () => {
    this.state.isClockVisible && this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clockName: Math.random().toString() });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="clock">
            <h1 className="clock__title">React clock</h1>
            {isClockVisible && (<Clock name={clockName} />)}
            <div className="clock__buttons">
              <button
                type="button"
                className="clock__button clock__button--show"
                onClick={this.show}
              >
                Show Clock
              </button>
              <button
                type="button"
                className="clock__button clock__button--hide"
                onClick={this.hide}
              >
                Hide Clock
              </button>
              <button
                type="button"
                className="clock__button clock__button--set"
                onClick={this.changeName}
              >
                Set random name
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
