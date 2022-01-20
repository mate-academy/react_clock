// import { type } from 'os';
import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 1,
  };

  visibilityHandler = () => {
    this.setState({ isClockVisible: true });
  };

  hideHandler = () => {
    this.setState({ isClockVisible: false });
  };

  getRandomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App card">
        <div className="card-body">
          <h1 className="display-5">React clock</h1>
          <span className="card-text badge bg-secondary">{this.state.clockName}</span>
          {this.state.isClockVisible
            ? <div className="btn-group-hidden"><Clock name={this.state.clockName} /></div>
            : <p className="btn-group-hidden">Press &quot;Show Clock&quot;</p>}
          <div className="btn-group">
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={this.visibilityHandler}
            >
              Show Clock
            </button>

            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={this.hideHandler}
            >
              Hide Clock
            </button>

            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.getRandomName}
            >
              Set random name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
