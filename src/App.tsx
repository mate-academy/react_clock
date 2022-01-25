import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component {
  state: State = {
    isClockVisible: true,
    clockName: 5,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          className="button"
          onClick={() => this.setState({
            isClockVisible: true,
          })}
        >
          Show
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.setState({
            isClockVisible: false,
          })}
        >
          Hide
        </button>
        <button
          type="button"
          className="button"
          onClick={() => this.setState({
            clockName: Math.floor(Math.random() * 100),
          })}
        >
          Set random name
        </button>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

export default App;
