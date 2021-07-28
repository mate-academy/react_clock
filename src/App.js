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
    const { isClockVisible, clockName } = this.state;
    const { showClock, randomName, hideClock } = this;

    return (
      <div className="App">
        <div className="card is-flex-direction-column has-text-centered">
          <h1 className="title ">React clock</h1>
          {isClockVisible
          && <Clock clockName={clockName} />}
          <div className="clock__buttons">
            <Button
              text="Show time"
              styles="button is-ligth is-rounded"
              onclick={showClock}
            />
            <Button
              text="Hide time"
              styles="button is-dark is-rounded"
              onclick={hideClock}
            />
            <Button
              text="Set random name"
              styles="button is-black is-rounded"
              onclick={randomName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
