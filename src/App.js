import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleVisible = () => {
    this.setState({ isClockVisible: false });
  }

  toggleHidden = () => {
    this.setState({ isClockVisible: true });
  }

  clockNewName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 1000) });
    // eslint-disable-next-line no-console
    console.log(
      `The clock was renamed from oldName to newName
    ${this.state.clockName}`,
    );
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock Name =
          {' '}
          {clockName}
        </h1>

        <button type="button" onClick={this.toggleHidden}>
          Show Clock
        </button>
        <button type="button" onClick={this.toggleVisible}>
          Hide Clock
        </button>
        <button type="button" onClick={this.clockNewName}>
          Set random name
        </button>
        <Clock
          isClockVisible={isClockVisible}
          clockName={clockName}
        />
      </div>
    );
  }
}

export default App;
