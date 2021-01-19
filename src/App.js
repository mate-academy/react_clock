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

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  makeNewRandomName = () => {
    const newName = Math.floor(Math.random() * (10 - 1)) + 1;

    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${this.state.clockName} to ${newName}`);

    this.setState({ clockName: newName });
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hiddenClock = () => {
    this.setState({ isClockVisible: false });
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const hidden = this.hiddenClock;
    const show = this.showClock;
    const changeName = this.makeNewRandomName;

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
