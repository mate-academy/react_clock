import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 123,
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  changeNameOnClick = () => {
    const newName = Math.floor(Math.random() * 1000);

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.clockName} to ${newName}`);
    this.setState({ clockName: newName });
  }

  render() {
    return (
      <div className="clock-container">
        <div className="App">
          <h1>React clock</h1>
          {this.state.isClockVisible && (<Clock name={this.state.clockName} />)}

          <button
            type="button"
            onClick={this.showClock}
            className="button"
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.hideClock}
            className="button"
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={this.changeNameOnClick}
            className="button"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
