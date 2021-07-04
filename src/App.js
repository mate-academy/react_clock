import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    time: new Date().toLocaleTimeString(),
    clockName: 0,
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.isClockVisible
      && new Date().toLocaleTimeString() !== this.state.time) {
        this.setState({ time: new Date().toLocaleTimeString() });
        console.log(this.state.time);
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.clockName !== this.state.clockName
    && console.log(`
    The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}
    `);
  }

  render() {
    return (
      <div className="App">

        {this.state.isClockVisible
        && <h1>React clock</h1>}
        <p>
          Current time:
          {this.state.time}
        </p>
        <div>
          <button
            type="button"
            onClick={() => (
              this.state.isClockVisible
            || this.setState({
              isClockVisible: true, time: new Date().toLocaleTimeString(),
            })
            )}
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
            onClick={() => this.setState({ clockName: Math.random() })}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
