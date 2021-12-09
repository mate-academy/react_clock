import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.isClockVisible
          ? (<Clock />)
          : null}
        <button type="button" onClick={this.showClock}>Show clock</button>
        <button type="button" onClick={this.hideClock}>Hide clock</button>
      </div>
    );
  }
}

export default App;
