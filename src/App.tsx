import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  clockVisibility: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockVisibility: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ clockVisibility: true });
  };

  hideClock = () => {
    this.setState({ clockVisibility: false });
  };

  setRandom = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        <div className="App_buttons">
          <button
            type="button"
            className="button button-show"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="button button-hide"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="button button-random"
            onClick={this.setRandom}
          >
            Set Random
          </button>
        </div>
        {this.state.clockVisibility && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}

export default App;
