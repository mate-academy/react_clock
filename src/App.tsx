import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  stopClock = () => {
    this.setState({ isClockVisible: false });
  };

  startClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    return (
      <div className="App">
        {this.state.isClockVisible && <Clock />}
        <button type="button" onClick={this.stopClock} className="button">Hide clock</button>
        <button type="button" onClick={this.startClock} className="button">Show clock</button>
      </div>
    );
  }
}

export default App;
