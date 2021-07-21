import React from 'react';
import './App.scss';
import { Clock } from './components/clock/clock';
import { Button } from './components/buttons/buttons';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  getRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  render() {
    const gettingClock = this.state.isClockVisible
      ? <Clock name={this.state.clockName} />
      : 'SECRET';

    return (
      <div className="clock">
        <h1 className="clock__title">
          { gettingClock }
        </h1>
        <div className="clock__buttons">
          <Button
            callback={() => {
              this.setState({ isClockVisible: false });
            }}
            buttonClass="hideClock"
            text="hide"
          />
          <Button
            callback={() => {
              this.setState({ isClockVisible: true });
            }}
            buttonClass="showClock"
            text="show"
          />
          <Button
            callback={this.getRandomName}
            buttonClass="randomName"
            text="random name"
          />
        </div>
      </div>
    );
  }
}

export default App;
