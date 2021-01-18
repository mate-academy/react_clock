import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    data: (new Date()).toLocaleTimeString(),
    number: 0,
  };

  setRandomNumber = (prevState) => {
    this.setState({
      number: Math.random(),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.data}
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.number} />
          )}
        </p>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.changeTime}
        >
          change time
        </button>
        <button
          type="button"
          onClick={this.setRandomNumber}
        >
          get console randomNumer
        </button>
      </div>
    );
  }
}

export default App;
