import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    clockVisible: true,
  };

  showClock = () => {
    this.setState({
      clockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      clockVisible: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.clockVisible && <Clock {...this.state} />}
        <button type="button" onClick={this.showClock}>Show Clock</button>
        <button type="button" onClick={this.hideClock}>Hide Clock</button>
      </div>
    );
  }
}

export default App;
