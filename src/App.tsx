import React from 'react';
import './App.scss';
import {Clock} from './Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  onHideClock = () => {
    this.setState({ isClockVisible: false });
  };

  onShowClock = () => {
    this.setState({ isClockVisible: true });
  };

  setRandomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isClockVisible && <Clock name={this.state.clockName} />}

        <div className="buttons">
          <button
            onClick={this.onShowClock}
            type="button"
            className="button button--show"
          >
            Show Clock
          </button>

          <button
            onClick={this.onHideClock}
            type="button"
            className="button button--hide"
          >
            Hide Clock
          </button>

          <button
            onClick={this.setRandomName}
            type="button"
            className="button button--hide"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
