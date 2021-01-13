import React from 'react';
import { AppTypes } from './types';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'Gerund',
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clockName: `[${(new Date()).toLocaleTimeString()}]` });
    // eslint-disable-next-line no-console,max-len
    console.log(`The Clock was renamed from oldName to ${this.state.clockName}`);
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="title is-2">React clock</h1>

        {isClockVisible && (
          <Clock name={this.state.clockName} />
        )}

        <div className="columns">
          <button
            type="button"
            onClick={this.showClock}
            className="button is-success is-light"
          >
            Show Clock
          </button>
          {'\n'}
          <button
            type="button"
            onClick={this.hideClock}
            className="button is-danger is-light"
          >
            Hide Clock
          </button>
          {'\n'}
          <button
            type="button"
            onClick={this.changeName}
            className="button is-primary is-light"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = AppTypes.isRequired;
