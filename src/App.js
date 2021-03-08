import React from 'react';
import CurrentTime from './CurrentTime';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: '0',
  };

  componentDidUpdate(prevProps, prevState) {
    this.state.previousName = prevState.name;

    // eslint-disable-next-line
    console.log(
      `The clock was renamed from
        ${this.state.previousName} to ${this.state.name}`,
    );
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ name: (Math.random() * 10).toFixed(0) });
  }

  render() {
    return (
      <div className="App">
        <h1>
          React clock
          {` `}
          { this.state.name }
        </h1>
        {this.state.isClockVisible && (
          <CurrentTime />
        )}
        <button type="button" onClick={this.showClock}>Show Clock</button>
        <button type="button" onClick={this.hideClock}>Hide Clock</button>
        <button type="button" onClick={this.changeName}>Set random name</button>
      </div>
    );
  }
}

export default App;
