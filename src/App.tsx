import React from 'react';
import { Clock } from './Components/Clock';

import './App.scss';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && <Clock name={clockName} />}

        <button
          className="App__button"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => {
            if (isClockVisible) {
              this.setState({
                clockName: Math.round(Math.random() * 1000),
              });
            }
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
