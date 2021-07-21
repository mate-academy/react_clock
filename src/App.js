import React, { Component } from 'react';
import { Clock } from './components/Clock';
import { Button } from './components/Button';

import './App.scss';

class App extends Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  render() {
    return (

      <div className="App">
        <h1>React Clock</h1>
        {this.state.isClockVisible
          ? <Clock name={this.state.clockName} />
          : (
            <h1 className="hiden">
              <span role="img" aria-label="e">
                Time? &#129300; : &#129296; : &#128580;
              </span>
            </h1>
          )}
        <div className="buttons">
          <Button
            text="SHOW"
            callback={() => {
              this.setState({ isClockVisible: true });
            }}
          />
          <Button
            text="HIDE"
            callback={() => {
              this.setState({ isClockVisible: false });
            }}
          />
          <Button
            text="RANDOM"
            callback={() => {
              this.setState({ clockName: Math.trunc(Math.random() * 10000) });
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
