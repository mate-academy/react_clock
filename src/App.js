import React from 'react';
import Clock from './components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    clockName: 123,
    isClockVisible: true,
  }

  render() {
    return (
      <div className="App">
        {this.state.isClockVisible && <Clock {...this.state} />}
      </div>
    );
  }
}

export default App;
