import React from 'react';
import './App.scss';

import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="">
        <span
          className="fs-3 fa-bold d-flex justify-content-center"
        >
          React clock
        </span>
        {isClockVisible && (
          <Clock />
        )}

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="
              ms-3
              btn
              btn-danger
              border-0
              bg-danger
              bg-gradient
            "
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="
              ms-3
              btn
              btn-success
              border-0
              bg-success
              bg-gradient
            "
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
