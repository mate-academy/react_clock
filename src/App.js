import React from 'react';
import { Button } from './Button';
import { Clock } from './Clock';
import './App.scss';

export class App extends React.Component {
  state = {
    clockName: '0',
    isClockVisible: true,
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

  randomName = () => {
    this.setState({
      clockName: `${Math.round(Math.random() * 100)}`,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="card is-flex-direction-column has-text-centered">
          <h1 className="title ">React clock</h1>
          {this.state.isClockVisible
          && <Clock clockName={this.state.clockName} />}
          <div className="clock__buttons">
            <Button
              text="Show time"
              styles="button is-ligth is-rounded"
              onclick={this.showClock}
            />
            <Button
              text="Hide time"
              styles="button is-dark is-rounded"
              onclick={this.hideClock}
            />
            <Button
              text="Set random name"
              styles="button is-black is-rounded"
              onclick={this.randomName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
