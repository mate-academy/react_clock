import React, { Component } from 'react';
import Clock from './components/Clock';

import './App.scss';

class App extends Component {
  state = {
    isClockVisible: false,
    initialValue: '00:00:00 AM',
    clockName: 0,
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();
      const humanResult = date.toLocaleTimeString();

      // eslint-disable-next-line
      console.log(humanResult);
      this.setState({ initialValue: humanResult });
    }, 1000);
  }

  show = () => this.setState({ isClockVisible: true })

  hide = () => this.setState({ isClockVisible: false })

  randomNumber = () => {
    const digit = Math.round(Math.random() * 100);

    this.setState({ clockName: digit });
  }

  render() {
    const { show, hide, randomNumber } = this;
    const { isClockVisible, initialValue, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible
        && (
        <Clock
          initialValue={initialValue}
          clockName={clockName}
        />
        )
      }
        <button
          type="button"
          onClick={show}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={hide}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={randomNumber}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
