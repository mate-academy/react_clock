import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible } = this.state;
    const newClockName = Math.floor(Math.random() * 101);

    return (
      <>
        {isClockVisible && <Clock name={this.state.clockName} />}
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ clockName: newClockName });
          }}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
