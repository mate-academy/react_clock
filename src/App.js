import React from 'react';

import './App.scss';

import Clock from './components/Clock/Clock';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  changeName = () => {
    const oldClockName = this.state.clockName;
    const newClockName = Math.floor(Math.random() * 1000);

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldClockName} to ${newClockName}`);

    this.setState({
      clockName: newClockName,
    });
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          {isClockVisible
            ? <Clock clockName={clockName} isClockVisible={isClockVisible} />
            : 'Time is up.'
          }
        </p>

        <button
          type="button"
          onClick={() => this.changeName()}
        >
          Set name
        </button>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show time
        </button>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide time
        </button>
      </div>
    );
  }
}

export default App;
