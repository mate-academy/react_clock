import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

class App extends React.Component {
  state = {
    showClock: true,
    clockName: 'React clock',
  };

  show() {
    this.setState({ showClock: true });
  }

  hide() {
    this.setState({ showClock: false });
  }

  name() {
    this.setState({ clockName: (Math.random() + 1).toString(36).substring(7) });
  }

  render() {
    const { showClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>{clockName}</h1>

        <div className="clock">
          <h3 className="clock__description">Current time:</h3>
          <span className="clock__value" data-cy="time">
            {showClock && <Clock />}
          </span>
        </div>

        <div className="buttons">
          <button
            type="button"
            onClick={this.show.bind(this)}
            className="buttons__button"
          >
            ShowClock
          </button>
          <button
            type="button"
            onClick={this.name.bind(this)}
            className="buttons__button"
          >
            clockName
          </button>
          <button
            type="button"
            onClick={this.hide.bind(this)}
            className="buttons__button"
          >
            HideClock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
