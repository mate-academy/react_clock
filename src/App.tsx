import React from 'react';
import './App.scss';
import Clock from './Clock';

type State = {
  isClockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: false,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <p>
          Current time:
          {' '}
          {this.state.isClockVisible ? <Clock /> : ''}
        </p>

        <button
          type="button"
          onClick={() => {
            if (this.state.isClockVisible === false) {
              this.setState({ isClockVisible: true });
              // eslint-disable-next-line
              console.log('on');
            }
          }}
        >
          Start
        </button>

        <button
          type="button"
          onClick={() => {
            if (this.state.isClockVisible === true) {
              this.setState({ isClockVisible: false });
              // eslint-disable-next-line
              console.log('off');
            }
          }}
        >
          Stop
        </button>
      </div>
    );
  }
}

export default App;
