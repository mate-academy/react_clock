import React from 'react';

import './App.scss';

import Clock from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  changeName = () => {
    this.setState({
      clockName: Math.random(),
    });
    // eslint-disable-next-line no-console,max-len
    console.log(`The Clock was renamed from oldName to ${this.state.clockName}`);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
        </p>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.changeName}
        >
          RandomName
        </button>
      </div>
    );
  }
}

export default App;
