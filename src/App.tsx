import React from 'react';

import { Clock } from './components';

import './App.scss';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  toggleClock = () => {
    this.setState(({ isClockVisible }) => ({ isClockVisible: !isClockVisible }));
  };

  setRandomName = () => {
    const randomName = Math.floor(Math.random() * 100);

    // eslint-disable-next-line
    this.setState({ clockName: randomName });
  };

  render() {
    const {
      isClockVisible,
      clockName,
    } = this.state;

    const btnToggleText = isClockVisible ? 'Hide Clock' : 'Show Clock';

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={this.toggleClock}
        >
          {btnToggleText}
        </button>
        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
