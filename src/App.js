/* eslint-disable react/no-unused-state */
import React from 'react';

import './App.scss';
import Clock from './Clock';

class App extends React.Component {
  state = {
    timerId: 'null',
    isClockVisible: true,
    date: '',
    clockName: '',
  }

  componentDidMount() {
    this.start();
  }

  randomGen = () => {
    this.setState(state => (
      { clockName: Math.random() * String(state.timerId) }
    ));
  }

  start = () => {
    this.setState({ isClockVisible: true });
    clearInterval(this.state.timerId);
    this.setState({ timerId: setInterval(() => {
      const date = new Date();

      this.setState({
        date: date.toLocaleTimeString(),
      });
      // eslint-disable-next-line
            console.log(date.toLocaleTimeString());
    }, 1000) });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={this.randomGen}
        >
          Set random name
        </button>

        <button
          type="button"
          onClick={this.start}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
            clearInterval(this.state.timerId);
          }}
        >
          Hide Clock
        </button>
        {isClockVisible && <Clock data={this.state} />}

      </div>
    );
  }
}

export default App;
