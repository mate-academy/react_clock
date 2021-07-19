import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 0,
  }

  random = () => {
    this.setState({ clockName: Math.floor(Math.random() * 1000) });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <Clock
          clockName={this.state.clockName}
          random={this.random}
        />
      </div>
    );
  }
}
export default App;
