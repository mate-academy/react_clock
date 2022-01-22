import React from 'react';

import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  setClockNameHandler = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  };

  showClockHandler = () => {
    this.setState({ isClockVisible: true });
  };

  hideClockHandler = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button type="button" onClick={this.showClockHandler}>Show Clock</button>
        <button type="button" onClick={this.hideClockHandler}>Hide Clock</button>
        <button type="button" onClick={this.setClockNameHandler}>Set random name</button>
        <p>
          Current time:
        </p>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
