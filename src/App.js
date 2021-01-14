import React from 'react';

import './App.scss';
import Clock from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: null,
  };

  nameGenerator = () => {
    this.setState({ clockName: Math.random() });
    this.state.isClockVisible && (
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from oldName to newName`)
    );
  }

  visible = () => {
    this.setState({ isClockVisible: true });
  }

  invisible = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <button type="button" onClick={this.visible}>
          Show Clock
        </button>

        <button type="button" onClick={this.invisible}>
          Hide Clock
        </button>

        <button type="button" onClick={this.nameGenerator}>
          Random name
        </button>

        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
        </p>
      </div>
    );
  }
}

export default App;
