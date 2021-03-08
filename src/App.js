// import { render } from 'node-sass';
import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.ceil(Math.random() * 100),
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  setNewName = () => this.setState({
    clockName: Math.ceil(Math.random() * 100),
  });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          {`Current time: `}
          <span>
            {isClockVisible && <Clock name={clockName} />}
          </span>
        </p>
        <button type="button" onClick={this.showClock}>
          Show clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide clock
        </button>

        <button type="button" onClick={this.setNewName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
