import React from 'react';
import './App.scss';
import { Clock } from './components/clock/clock';

export class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: false,
  };

  clockStateVisible = () => {
    this.setState({ isClockVisible: true });
  };

  clockStateUnVisible = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1 className="box">React clock</h1>
        <button
          type="button"
          className="button is-primary"
          onClick={this.clockStateVisible}
        >
          Show Clock
        </button>
        {this.state.isClockVisible
          && <Clock name={this.state.clockName} />}
        <button
          className="button is-danger"
          type="button"
          onClick={this.clockStateUnVisible}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="button is-primary"
          onClick={() => this.setState({
            clockName: Math.floor(Math.random() * 10),
          })}
        >
          Set random name
        </button>
        <p className="box">{`Name: ${this.state.clockName}`}</p>
      </div>
    );
  }
}
export default App;
