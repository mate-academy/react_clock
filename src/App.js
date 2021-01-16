import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 1000),
  }

  getShow() {
    this.setState({ isClockVisible: true });
  }

  getHide() {
    this.setState({ isClockVisible: false });
  }

  randomName() {
    const randomName = Math.floor(Math.random() * 1000);
    // eslint-disable-next-line
    console.log(
      `The Clock was renamed from ${this.state.clockName} to ${randomName}`,
    );
    this.setState({ clockName: randomName });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="container">
        {isClockVisible && <Clock name={clockName} />}

        <button
          type="button"
          onClick={() => this.getShow()}
          className="button"
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => this.getHide()}
          className="button"
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => this.randomName()}
          className="button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
