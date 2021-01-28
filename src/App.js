import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  getRandomName = () => (
    Math.floor(Math.random() * 100)
  );

  getClockName = () => (
    this.setState((state) => {
      const oldName = state.clockName;
      const newName = this.getRandomName();

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);

      return {
        clockName: newName,
      };
    })
  );

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="app">
        <div className="app_clock">
          <h1 className="title">React clock</h1>
          {isClockVisible && <Clock name={clockName} />}

          <div className="app_buttons">
            <button
              type="button"
              onClick={() => {
                this.setState(state => ({ isClockVisible: true }));
              }}
            >
              Show Clock
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(state => ({ isClockVisible: false }));
              }}
            >
              Hide Clock
            </button>

            <button
              type="button"
              onClick={this.getClockName}
            >
              Rename clock
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
