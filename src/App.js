import React from 'react';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  changeName = () => {
    if (this.state.isClockVisible) {
      const name = +(Math.random() * 100000).toFixed(0);

      this.setState({ name });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.isClockVisible ? (
            <Clock clockName={this.state.name} />
          ) : (
            <p className="Clock__state">The timer is stopped</p>
          )}
        </div>
        <div>
          <Button onClick={this.showClock} name="Show Clock" />
          <Button onClick={this.hideClock} name="Hide Clock" />
          <Button onClick={this.changeName} name="Change name" />
        </div>
      </div>
    );
  }
}

export default App;
