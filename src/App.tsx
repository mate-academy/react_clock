import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean
  clockName: number,
};

class App extends React.PureComponent <{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  hideTimer = () => {
    this.setState({ isClockVisible: false });
  };

  showTimer = () => {
    this.setState({ isClockVisible: true });
  };

  randomName = () => {
    this.setState({ clockName: Math.random() });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (<Clock name={this.state.clockName} />)}
        </p>
        <button type="button" onClick={this.showTimer}>
          Show Clock
        </button>
        <button type="button" onClick={this.hideTimer}>
          Hide Clock
        </button>
        <button type="button" onClick={this.randomName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
