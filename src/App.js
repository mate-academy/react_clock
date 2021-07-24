import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 100,
  };

  render() {
    return (
      <div className="App">
        {this.state.isClockVisible && (
          <Clock
            isClockVisible={this.state.isClockVisible}
            clockName={this.state.clockName}
          />
        )}
      </div>
    );
  }
}

export default App;
