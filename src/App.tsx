/* eslint-disable max-classes-per-file */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type AppState = {
  isClockVisible: boolean;
};

class App extends React.Component<{}, AppState> {
  buttonName = 'Hide';

  state: AppState = {
    isClockVisible: true,
  };

  setClock = (isClockVisible: boolean) => {
    this.setState({ isClockVisible });
    this.buttonName = isClockVisible ? 'Show' : 'Hide';
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
          {this.state.isClockVisible
          && <Clock />}
        </>
      </div>
    );
  }
}

export default App;
