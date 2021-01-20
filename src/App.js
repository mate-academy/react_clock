import React from 'react';
import { Clock } from './Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: '',
    isClockVisiable: true,
  };

  setRandom = () => {
    const randomName = Math.random() * 10;

    this.setState({ name: randomName });
    // eslint-disable-next-line
    console.log(`
    The Clock was renamed from ${this.state.name} to ${randomName}
  `);
  }

  render() {
    const { clockName, isClockVisiable } = this.state;

    return (
      <div className="wrapper">
        {isClockVisiable && <Clock name={clockName} />}
        <div className="container">
          <button
            className="button"
            type="button"
            onClick={() => {
              this.setState(
                {
                  isClockVisiable: true,
                },
              );
            }}
          >
            Show Clock
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              this.setState(
                {
                  isClockVisiable: false,
                },
              );
            }}
          >
            Hide Clock
          </button>

          <button
            className="button"
            type="button"
            onClick={() => this.setRandom()}
          >
            Set random name
          </button>
        </div>

      </div>
    );
  }
}

export default App;
