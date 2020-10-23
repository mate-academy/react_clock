import React from 'react';

import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  changeVisibility = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  renameClock = () => {
    this.setState((state) => {
      const newName = this.randomizer();

      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${state.clockName} to ${newName}`);

      return { clockName: newName };
    });
  }

  randomizer = () => (
    Math.floor(Math.random() * 1000)
  )

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          {isClockVisible
            ? <Clock name={this.state.clockName} />
            : ''
          }
        </div>

        <button
          type="button"
          onClick={this.changeVisibility}
          className="App__button"
        >
          {isClockVisible ? 'Hide Clock' : 'Show Clock'}
        </button>
        <button
          type="button"
          onClick={this.renameClock}
          className="App__button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
