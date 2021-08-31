import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';
import { Button } from './components/Button';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
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

  randomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 100),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        <div>
          <Button buttonName="Show Clock" action={this.showClock} />
          <Button buttonName="Hide Clock" action={this.hideClock} />
          <Button buttonName="Set random name" action={this.randomName} />
        </div>
      </div>
    );
  }
}

export default App;
