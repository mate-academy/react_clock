import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
    isClockVisible: true,
    clockName: 33,
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  clockHandler = () => (
    this.setState({ isClockVisible: !this.state.isClockVisible })
  )

  render() {
    const { date, isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          <button
            type="button"
            onClick={this.clockHandler}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.clockHandler}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => (
              this.setState({ clockName: Math.ceil(Math.random() * 100) })
            )}
          >
            Set random name
          </button>
        </p>
        {isClockVisible && <Clock date={date} clockName={clockName} />}
      </div>
    );
  }
}

export default App;
