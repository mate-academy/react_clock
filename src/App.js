import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    date: new Date(),
    isClockVisible: true,
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { date, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          <button
            type="button"
            onClick={() => (
              this.setState({ isClockVisible: true })
            )}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={() => (
              this.setState({ isClockVisible: false })
            )}
          >
            Hide Clock
          </button>
        </p>
        {isClockVisible && <Clock date={date} />}
      </div>
    );
  }
}

export default App;
