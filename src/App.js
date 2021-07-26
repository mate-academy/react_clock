import React from 'react';
import Clock from './components/closk/clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        {this.state.isClockVisible && (
        <Clock
          isClockVisible={isClockVisible}
          clockName={clockName}
        />
        )}
      </div>
    );
  }
}

export default App;
