import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 13,
  }

  render() {
    const { clockName, isClockVisible } = this.state;
    const randomName = Math.trunc(Math.random() * 100);

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">Clock</h1>
          <div className="App__clock">
            {isClockVisible
              ? <Clock name={clockName} />
              : (
                <div className="App__text">
                  press
                  <span className="App__span"> show clock</span>
                </div>
              )}
          </div>
          <div className="App__buttons">
            <button
              className="button"
              type="button"
              onClick={() => {
                this.setState({ isClockVisible: !isClockVisible });
              }}
            >
              {isClockVisible
                ? 'Hide clock'
                : 'Show Clock'}
            </button>
            <button
              className="button"
              type="button"
              onClick={() => {
                // eslint-disable-next-line
                console.log(`The Clock was renamed from ${clockName} to ${randomName}`);

                this.setState({ clockName: randomName });
              }}
            >
              Change name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
