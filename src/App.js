import React from 'react';

import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 1000),
    });
  }

  changeClockVisbility = () => {
    this.setState(prevState => ({
      isClockVisible: !prevState.isClockVisible,
    }));
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}

        <>
          <button
            type="button"
            onClick={this.changeClockVisbility}
          >
            {this.state.isClockVisible
              ? 'Hide Clock'
              : 'Show Clock'
            }
          </button>

          <button
            type="button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </>
      </>
    );
  }
}

export default App;
