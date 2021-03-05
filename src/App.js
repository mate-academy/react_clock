import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed `
        + `from ${prevState.clockName} to ${this.state.clockName}.`,
      );
    }
  }

  handleToVisible = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  handleToHidden = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  handleName = () => {
    this.setState({
      clockName: Math.round(Math.random() * 100),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <button type="button" onClick={this.handleToVisible}>
          Show Clock
        </button>
        <button type="button" onClick={this.handleToHidden}>
          Hide Clock
        </button>
        <button type="submit" onClick={this.handleName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
