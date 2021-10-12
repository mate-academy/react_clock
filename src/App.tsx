import React from 'react';
import './App.scss';

import { StateTypes } from './types/StateTypes';

import { Clock } from './components/Clock';

export class App extends React.Component<{}, StateTypes> {
  state = {
    isClockVisible: true,
    nameClock: 0,
  };

  render() {
    const { isClockVisible, nameClock } = this.state;

    return (
      <div className="App">
        <div className="App__box box">
          <h1 className="box__title">React clock</h1>
          <p className="box__timeText">
            Current time:
          </p>
          <p>
            {isClockVisible
                && <Clock name={nameClock} />}
          </p>
          <button
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
            className="box__show-button"
          >
            Show
          </button>

          <button
            type="button"
            onClick={() => this.setState({ isClockVisible: false })}
            className="box__hide-button"
          >
            Hide
          </button>

          <button
            type="button"
            onClick={() => this.setState({ nameClock: Math.floor(Math.random() * 100) })}
            className="box__randomName-button"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
