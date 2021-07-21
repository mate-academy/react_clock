import React from 'react';
import Clock from './components/closk/clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
  }

  render() {
    return (
      <div className="app">
        {this.state.isClockVisible && <Clock {...this.state} />}
      </div>
    );
  }
}

export default App;
