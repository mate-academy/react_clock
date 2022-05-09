import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    clockVisible: true,
    clockName: 1,
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

  changeName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 10),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.clockName}</h1>
        {this.state.clockVisible && <Clock {...this.state} />}
        <button
          disabled={this.state.clockVisible}
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          disabled={!this.state.clockVisible}
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button type="button" onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default App;
