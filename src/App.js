import React from 'react';
import { Clock } from './Clock';

import './App.scss';
import { ClockControl } from './ClockControl';

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
        <ClockControl
          text="Show Clock"
          action={this.showClock}
        />
        <ClockControl
          text="Hide Clock"
          action={this.hideClock}
        />
        <ClockControl
          text="Set random name"
          action={this.changeName}
        />
      </div>
    );
  }
}

export default App;
