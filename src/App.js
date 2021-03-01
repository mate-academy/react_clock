import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    randomName: 'Gosha',
  }

  showHideClock = () => {
    this.setState(prevState => ({ isClockVisible: !prevState.isClockVisible }
    ));
  };

  setRandomName = () => {
    this.setState({ randomName: 'Alex' });
  }

  render() {
    const { isClockVisible, randomName } = this.state;
    const { showHideClock, setRandomName } = this;

    return (

      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={setRandomName}
        >
          Set Random Name
        </button>
        {isClockVisible
          ? (
            <button
              type="button"
              onClick={showHideClock}
            >
              Hide Clock
            </button>
          )
          : (
            <button
              type="button"
              onClick={showHideClock}
            >
              Show Clock
            </button>
          )}
        {isClockVisible && <Clock name={randomName} /> }
      </div>
    );
  }
}

export default App;
