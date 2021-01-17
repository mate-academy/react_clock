import React from 'react';

import './App.scss';

class App extends React.Component {
  state = {
    time: new Date(),
    isClockVisible: true,
    clockName: Math.floor(Math.random() * (10 - 1)) + 1,
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      if (this.state.isClockVisible) {
        this.tick();
        // eslint-disable-next-line
        console.log(this.state.time.toLocaleTimeString());
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  randomName = () => {
    const newName = Math.floor(Math.random() * (10 - 1)) + 1;

    this.setState({ clockName: newName });
  }

  hiddenClock = () => {
    this.setState({ isClockVisible: false });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const hidden = this.hiddenClock;
    const show = this.showClock;
    const changeName = this.randomName;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p
          hidden={!this.state.isClockVisible}
        >
          Current time:
          {' '}
          {this.state.time.toLocaleTimeString()}
        </p>

        <form>
          <button
            type="button"
            onClick={show}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={hidden}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={changeName}
          >
            Set random name
          </button>
        </form>

      </div>
    );
  }
}

export default App;
