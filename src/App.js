import React from 'react';
import Clock from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    previousName: '0',
    name: '1',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    if (!this.state.isClockVisible) {
      return;
    }

    this.setState(prevState => ({ previousName: prevState.name }));
    this.setState({ name: (Math.random() * 10).toFixed(0) });

    // eslint-disable-next-line
    console.log(
      `The clock was renamed from
        ${this.state.previousName} to ${this.state.name}`,
    );
  }

  render() {
    return (
      <div className="App">
        <h1>
          {`React clock ${this.state.name}`}
        </h1>
        {this.state.isClockVisible && (
          <Clock />
        )}
        <button type="button" onClick={this.showClock}>Show Clock</button>
        <button type="button" onClick={this.hideClock}>Hide Clock</button>
        <button type="button" onClick={this.changeName}>Set random name</button>
      </div>
    );
  }
}

export default App;
