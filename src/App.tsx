import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

type State = {
  showClock: boolean,
  clockName: string,
};

class App extends React.Component<{}, State> {
  state = {
    showClock: true,
    clockName: 'React clock',
  };

  show = () => {
    this.setState(() => (
      { showClock: true }
    ));
  };

  hide = () => {
    this.setState(() => (
      { showClock: false }
    ));
  };

  rename = () => {
    this.setState({
      clockName: (Math.random() + 1).toString(36).substring(7),
    });
  };

  render() {
    const { showClock, clockName } = this.state;

    return (
      <div className="App">
        <div className="clock">
          <div className="clock__wraper">
            <h3 className="clock__description">Clock name:</h3>
            <h3 className="clock__description">Current time:</h3>
          </div>
          <div className="clock__value" data-cy="time">
            {showClock && <Clock name={clockName} />}
          </div>
        </div>

        <div className="buttons">
          <button
            type="button"
            onClick={this.show}
            className="buttons__button"
          >
            ShowClock
          </button>
          <button
            type="button"
            onClick={this.rename}
            className="buttons__button"
          >
            clockName
          </button>
          <button
            type="button"
            onClick={this.hide}
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
