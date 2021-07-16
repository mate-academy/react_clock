import React from 'react';
import { Clock } from './Clock';

import './App.scss';
import { ClockControls } from './ClockControls';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  changeName = () => {
    const name = Math.floor(Math.random() * 1000);

    this.setState({ clockName: name });
  }

  render() {
    return (
      <div className="App">
        {this.state.isClockVisible
          ? <Clock {...this.state} />
          : 'Clock is hidden'}
        <ClockControls
          {...this.state}
          hideClock={this.hideClock}
          showClock={this.showClock}
          changeName={this.changeName}
          app={this}
        />
      </div>
    );
  }
}

export default App;
