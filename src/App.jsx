import React, { Component } from 'react';

import './App.scss';
import { Button } from './components/Button';
import { Clock } from './components/Clock';

class App extends Component {
  state = {
    isClockVisible: true,
    clockName: 1000101,
  };

  render() {
    return (
      <div className="container">
        {this.state.isClockVisible
          ? <Clock clockName={this.state.clockName} />
          : <h1 className="destroyed">Clock was Destroyed</h1>}
        <div className="btn-container">
          <Button
            name="Show Clock"
            callback={() => {
              this.setState({ isClockVisible: true });
            }}
          />
          <Button
            name="Hide Clock"
            callback={() => {
              this.setState({ isClockVisible: false });
            }}
          />
          <Button
            name="Set random name"
            callback={() => {
              const newClockName = +Math.floor(Math.random() * 100).toString(2);

              this.setState({ clockName: newClockName });
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
