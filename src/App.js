import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 777,
  };

  toggleVisible = () => {
    this.setState({ isClockVisible: true });
  }

  toggleHidden = () => {
    this.setState({ isClockVisible: false });
  }

  clockNewName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 1000) });
    // eslint-disable-next-line no-console
    console.log(
      `The clock was renamed from oldName to newName ${this.state.clockName}`,
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

        <button type="button" onClick={this.toggleVisible}>
          Show Clock
        </button>
        <button type="button" onClick={this.toggleHidden}>
          Hide Clock
        </button>
        <button type="button" onClick={this.clockNewName}>
          Set random name
        </button>
        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}

export default App;
