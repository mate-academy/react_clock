import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  toggleClockVisibility(bool: boolean) {
    if (bool !== this.state.isClockVisible) {
      this.setState({
        isClockVisible: bool,
      });
    }
  }

  randomName() {
    const name = Math.floor(Math.random() * (100 - 1)) + 1;

    this.setState({
      clockName: name,
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <p className="App__clock">
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>
        <div className="App__buttons">
          <button
            type="button"
            onClick={() => this.toggleClockVisibility(true)}
            disabled={isClockVisible}
            className="App__button"
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={() => this.toggleClockVisibility(false)}
            disabled={!isClockVisible}
            className="App__button"
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => this.randomName()}
            className="App__button"
            disabled={!isClockVisible}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
