import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  randomClockName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 100),
    });
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

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        {isClockVisible
        && (
          <p className="App__clock">
            <Clock name={clockName} />
          </p>
        )}
        <div className="App__button">
          <button
            className="App__button-show"
            type="submit"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            className="App__button-hide"
            type="submit"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            className="App__button-name"
            type="submit"
            onClick={this.randomClockName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
