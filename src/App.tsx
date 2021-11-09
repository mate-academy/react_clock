import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 256),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button type="button" onClick={this.showClock} className="App__button">
          Show Clock
        </button>

        <button type="button" onClick={this.hideClock} className="App__button">
          Hide Clock
        </button>

        <button type="button" onClick={this.setRandomName} className="App__button">
          Set Random Name
        </button>

        {this.state.isClockVisible && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
