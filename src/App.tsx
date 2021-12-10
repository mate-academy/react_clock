import { Component } from 'react';
import { Clock } from './Clock';
import './App.scss';

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends Component<{}, State> {
  state = {
    isClockVisible: false,
    clockName: 'Name 1',
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  setRandomName = () => {
    this.setState({
      clockName: `Name ${Math.round(Math.random() * 1000)}`,
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <div className="App__clock">
          {isClockVisible ? <Clock name={clockName} /> : <p>Oops</p>}
        </div>
        <div className="App__container">
          <button
            className="App__btn"
            type="button"
            disabled={!isClockVisible}
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            className="App__btn"
            type="button"
            disabled={isClockVisible}
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            className="App__btn"
            type="button"
            onClick={this.setRandomName}
          >
            Set name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
