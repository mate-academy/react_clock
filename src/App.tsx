import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

type State = {
  isVisible: boolean
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: true,
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  render() {
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
