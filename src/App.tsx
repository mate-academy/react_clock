import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

type AppState = {
  clockName: number | null;
  isClockVisible: boolean;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    clockName: null,
    isClockVisible: true,
  };

  show = () => {
    this.setState({ isClockVisible: true });
  };

  hide = () => {
    this.setState({ isClockVisible: false });
  };

  setClockName = () => {
    this.setState({ clockName: Math.trunc(Math.random() * 100) });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <div className="buttons">
          <button className="btn" type="button" onClick={this.show}>
            Show Clock
          </button>

          <button className="btn" type="button" onClick={this.hide}>
            Hide Clock
          </button>

          <button
            className="btn"
            type="button"
            onClick={this.setClockName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
