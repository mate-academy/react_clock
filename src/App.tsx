import React from 'react';
import './App.scss';

import Clock from './component/Clock';

export default class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
        <h1>React Clock</h1>
        <button type="button" onClick={() => this.setState({ isClockVisible: true })}>
          Show Clock
        </button>
        <button type="button" onClick={() => this.setState({ isClockVisible: false })}>
          Hide Clock
        </button>
        {this.state.isClockVisible && <Clock />}
      </div>
    );
  }
}

