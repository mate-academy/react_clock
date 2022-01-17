import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

class App extends React.Component {
  state: StateVisible = {
    isVisible: true,
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  render(): React.ReactNode {
    return (
      <>
        <h1>React clock</h1>
        <div>
          Current time:
          {this.state.isVisible && <Clock />}
        </div>
        <button type="button" onClick={this.showClock}>Show clock</button>
        <button type="button" onClick={this.hideClock}>Hide clock</button>
      </>
    );
  }
}

export default App;
