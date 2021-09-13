import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  clockName: number,
  visibleClock: boolean,
};

export class App extends React.Component {
  state: State = {
    visibleClock: true,
    clockName: 0,
  };

  setRandomName = () => {
    if (this.state.visibleClock) {
      this.setState({ clockName: Math.ceil(Math.random() * 100) });
    }
  };

  showClock = () => {
    this.setState({ visibleClock: true });
  };

  hideClock = () => {
    this.setState({ visibleClock: false });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>

        <div className="clock">
          <p>{`Random name: ${this.state.clockName}`}</p>

          {this.state.visibleClock && <Clock clockName={this.state.clockName} /> }

          <button
            className="btn btn-outline-success"
            type="button"
            onClick={this.showClock}
          >
            Show сlock
          </button>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={this.hideClock}
          >
            Hide сlock
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
