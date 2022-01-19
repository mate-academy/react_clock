import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

interface State {
  isClockVisible: boolean;
  clockName: number;
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  showClock = () => (
    this.setState({
      isClockVisible: true,
    })
  );

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible
          && <Clock name={this.state.clockName} />}
        </p>
        <button
          type="button"
          className="showButton"
          onClick={() => (
            this.setState({
              isClockVisible: true,
            })
          )}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="hideButton"
          onClick={() => (
            this.setState({
              isClockVisible: false,
            })
          )}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="nameButton"
          onClick={() => (
            this.setState({
              clockName: Math.round(Math.random() * 1000),
            })
          )}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
