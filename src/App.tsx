import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export class App extends React.Component {
  state = {
    clockName: '0',
    isClockVisible: true,
  };

  clockStateVisible = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  clockStateHidden = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <button
          className="App__buttonShow"
          type="button"
          onClick={this.clockStateVisible}
        >
          Show Clock
        </button>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}

        <button
          className="App__buttonHide"
          type="button"
          onClick={this.clockStateHidden}
        >
          Hide Clock
        </button>
        {(!this.state.isClockVisible) && null}

        <button
          type="button"
          className="App__buttonRandom"
          onClick={() => this.setState({
            clockName: String(Math.floor(Math.random() * 10)),
          })}
        >
          Set random name
        </button>
      </div>
    );
  }
}
