import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    isClockVisible: true,
    clockName: 10000,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.isClockVisible) {
        // eslint-disable-next-line
        console.log(this.state.time);
      }

      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const changeName = () => {
      const max = 100000;

      if (this.state.isClockVisible) {
        const randomName = Math.floor(Math.random() * max);
        // eslint-disable-next-line
        console.log(`The Clock was renamed from ${this.state.clockName} `+
          `to ${randomName}`);
        this.setState({ clockName: randomName });
      }
    };

    return (
      <div className="App">
        <h1>React Clock</h1>
        {
        this.state.isClockVisible

          ? (
            <>
              <p>
                Current time:
                {` ${this.state.time}`}
              </p>
            </>
          )
          : <p className="destroyed">Time was stopped</p>}
        <div className="App__button-container">
          <button
            className="App__button"
            onClick={() => this.setState({ isClockVisible: false })}
            type="submit"
          >
            Stop Time
          </button>
          <button
            className="App__button"
            onClick={() => this.setState({ isClockVisible: true })}
            type="submit"
          >
            Start Time
          </button>
          <button
            className="App__button"
            onClick={changeName}
            type="submit"
          >
            Change name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
