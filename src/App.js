import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  setRandomName = () => {
    const min = 1;
    const max = 1000;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    this.setState({ clockName: num });
  }

  showTimer = () => {
    this.setState({ isClockVisible: true });
  }

  hideTimer = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="control">
          <button type="button" onClick={this.showTimer}>
            Show Clock
          </button>
          <button type="button" onClick={this.hideTimer}>
            Hide Clock
          </button>
          <button type="button" onClick={this.setRandomName}>
            Set random name
          </button>
        </div>

        {isClockVisible && (<Clock name={this.state.clockName} />)}
      </div>
    );
  }
}

export default App;
