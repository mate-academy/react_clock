import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    timerId: undefined,
    currentTime: new Date().toLocaleTimeString(),
    isClockVisible: true,
  };

  componentDidMount() {
    this.startClockTimer();
  }

  componentDidUpdate() {
    if (this.state.isClockVisible && !this.state.timerId) {
      this.startClockTimer();
    }
  }

  startClockTimer = () => {
    const id = setInterval(() => {
      const time = new Date().toLocaleTimeString();

      // eslint-disable-next-line
      console.log(time);

      this.setState({
        timerId: id,
        currentTime: time,
      });
    }, 1000);
  };

  render(): React.ReactNode {
    const {
      currentTime,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isClockVisible
        && (
          <Clock
            time={currentTime}
            id={this.state.timerId}
          />
        )}

        <div className="App__buttons">
          <button
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
            className="App__show-clock"
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={() => this.setState({
              isClockVisible: false,
              timerId: undefined,
            })}
          >
            Hide Clock
          </button>
        </div>

      </div>
    );
  }
}

export default App;
