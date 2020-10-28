import React from 'react';
import { Clock } from './components/Clock';

import './button.scss';
import './App.scss';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  }

  getRandomName = () => {
    const randomName = Math.round(Math.random() * (100 - 1) + 1);

    this.setState({
      clockName: randomName,
    });
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${this.state.clockName} `
    + `to ${randomName}`);
  }

  showHideClock = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        {
          isClockVisible && <Clock name={clockName} />
        }

        <button
          type="button"
          className="button button__show-hide"
          onClick={this.showHideClock}
        >
          {isClockVisible ? 'Hide Clock' : 'Show Clock'}
        </button>

        <button
          type="button"
          className="button button__random-name"
          onClick={this.getRandomName}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
