import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <div className="App__wrapper">

          <button
            className="App__wrapper__button"
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            className="App__wrapper__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

        </div>

        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}

export default App;
