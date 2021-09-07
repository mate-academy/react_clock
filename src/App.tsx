import React from 'react';
import Clock from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div>
        <h1>React clock</h1>

        <div>

          {isClockVisible && <Clock date={new Date()} />}

          <button
            type="button"
            onClick={this.showClock}
          >
            Show
          </button>

          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide
          </button>

          <button
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
