import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.round(Math.random() * 100),
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  hide = () => {
    this.setState({ isClockVisible: false });
  };

  show = () => {
    this.setState({ isClockVisible: true });
  };

  setName = () => {
    this.setState({ clockName: Math.round(Math.random() * 100) });
  }

  render() {
    return (
      <div className="App card">
        <h1 className="card-header">React clock</h1>
        <p className="card-content">
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </p>
        <div className="card-footer">
          <button
            className="button card-footer-item"
            onClick={this.show}
            type="button"
          >
            Show Clock
          </button>
          <button
            className="button card-footer-item"
            onClick={this.hide}
            type="button"
          >
            Hide Clock
          </button>
          <button
            className="button card-footer-item"
            onClick={this.setName}
            type="button"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
