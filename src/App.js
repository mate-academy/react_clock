import React from 'react';
import Clock from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  changeName = () => {
    const { clockName } = this.state;
    const newClockName = Math.floor(Math.random() * 1000);

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${clockName} to ${newClockName}`);

    this.setState({
      clockName: newClockName,
    });
  }

  showTime = () => {
    this.setState({ isClockVisible: true });
  }

  hideTime = () => {
    this.setState({ isClockVisible: false });
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
          onClick={this.changeName}
        >
          Set name
        </button>

        <button
          type="button"
          onClick={this.showTime}
        >
          Show time
        </button>

        <button
          type="button"
          onClick={this.hideTime}
        >
          Hide time
        </button>
      </div>
    );
  }
}

export default App;
