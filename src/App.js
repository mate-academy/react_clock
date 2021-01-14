import React from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: 'visible',
    clockName: Math.floor(Math.random() * 10),
  };

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      if (this.state.isClockVisible === 'visible') {
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
      }
    }, 1000);
  }

  hideClock = () => {
    this.setState({ isClockVisible: 'hidden' });
  }

  showClock = () => {
    this.setState({ isClockVisible: 'visible' });
  }

  render() {
    const visibility = this.state.isClockVisible;
    const hide = this.hideClock;
    const show = this.showClock;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p style={{ visibility }}>
          Current time:
          {' '}
          <span><Clock name={this.state.clockName} /></span>
        </p>
        <button type="button" onClick={show}>Show clock</button>
        <button type="button" onClick={hide}>Hide clock</button>
        <button
          type="button"
          onClick={() => (this.setState({
            clockName: Math.floor(Math.random() * 10),
          }))}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
