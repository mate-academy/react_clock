import React from 'react';
import './App.scss';
import Clock from './components/clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  startClock = () => {
    this.setState({ isClockVisible: true });
  };

  stopClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        {this.state.isClockVisible && <Clock />}
        <button type="button" onClick={this.stopClock} className="button__red">Hide clock</button>
        <button type="button" onClick={this.startClock} className="button__green">Show clock</button>
      </div>
    );
  }
}

export default App;
