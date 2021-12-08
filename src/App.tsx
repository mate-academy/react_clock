/* eslint-disable react/button-has-type */
import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  isClockHidden: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockHidden: true,
  };

  showClock = () => {
    this.setState({ isClockHidden: true });
  };

  hideClock = () => {
    this.setState({ isClockHidden: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          {this.state.isClockHidden && <Clock />}
        </p>

        <button type="button" className="hideClock" onClick={this.hideClock}>Hide</button>
        <button type="button" className="showClock" onClick={this.showClock}>Show</button>
      </div>
    );
  }
}

export default App;
