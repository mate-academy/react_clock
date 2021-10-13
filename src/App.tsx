/* eslint-disable max-classes-per-file */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type AppState = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, AppState> {
  buttonName = 'Hide';

  state: AppState = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 10),
  };

  setClock = (isClockVisible: boolean) => {
    this.setState({ isClockVisible });
    this.buttonName = isClockVisible ? 'Show' : 'Hide';
  };

  setClockName = (clockName: number) => {
    this.setState({ clockName });
  };

  render() {
    return (
      <div className="App">
        <>
          <button
            type="button"
            onClick={() => this.setClock(!this.state.isClockVisible)}
          >
            {this.buttonName}
          </button>
          <button
            type="button"
            onClick={() => this.setClockName(Math.round(Math.random() * 10))}
          >
            Set random name
          </button>
          {this.state.isClockVisible
          && <Clock name={this.state.clockName} />}
        </>
      </div>
    );
  }
}

export default App;
