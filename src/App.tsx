import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

export default class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
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
