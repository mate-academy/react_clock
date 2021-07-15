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

    return (
      <div className="App">
        <div className="App__button-container">
          <button
            className="App__button"
            onClick={() => {
              this.setState({ isClockVisible: true })
            }}
          >
            Show Clock
          </button>
          <button
            className="App__button"
            onClick={() => {
              this.setState({ isClockVisible: false })
            }}
          >
            Hide Clock
          </button>
          <button
            className="App__button"
            onClick={() => {
              const randomNumber = Math.ceil(Math.random() * 10);
              this.setState({ clockName: randomNumber })
            }}
          >
            Set random name
          </button>
        </div>
        {isClockVisible && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }

};

export default App;
