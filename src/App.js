import React from 'react';

import './App.scss';

class App extends React.Component {
  timerID = null;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isClockVisible: true,
      clockName: 'clock',
    };
  }

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.stopClock();
  }

  startClock = () => {
    if (this.timerID === null) {
      this.timerID = setInterval(() => {
        this.tick();

        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000);
    }
  }

  stopClock = () => {
    clearInterval(this.timerID);
    this.timerID = null;
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  }

  showClock = () => {
    this.startClock();
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
    this.stopClock();
    this.setState({
      isClockVisible: false,
    });
  }

  setRandomName = () => {
    const oldName = this.state.clockName;

    this.setState({
      clockName: `${Math.random()}`,
    },
    // eslint-disable-next-line
    () => console.log(`The Clock was renamed from ${oldName} to ${this.state.clockName}`));
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            {this.state.isClockVisible && this.state.date.toLocaleTimeString()}
          </p>
          <div>
            <button onClick={this.showClock} type="button">
              Show Clock
            </button>

            <button onClick={this.hideClock} type="button">
              Hide Clock
            </button>

            <button onClick={this.setRandomName} type="button">
              Set random name
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
