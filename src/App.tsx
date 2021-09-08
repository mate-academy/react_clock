import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';
/* eslint-disable no-console */

type State = {
  clockName: number;
  isClockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomNumber = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 10),
    });
  };

  render() {
    const { showClock, hideClock } = this;
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        {isClockVisible
          ? (
            <Clock name={clockName} />
          )
          : null}

        <div className="">
          <button
            type="button"
            className=""
            onClick={showClock}
          >
            Show Clock
          </button>

          <button type="button" onClick={hideClock}>
            Hide Clock
          </button>

          <button
            type="button"
            onClick={
              this.setRandomNumber.bind(
                this,
              )
            }
            className="buttonBox__button"
          >
            Set Name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
