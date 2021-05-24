import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    randomName: Math.ceil(Math.random() * 100),
  };

  setRandomName() {
    const randomValue = Math.ceil(Math.random() * 100);
    /* eslint-disable-next-line */
    console.log(`The clock was renamed from`
      + `${this.state.randomName} to ${randomValue}`);
    this.setState({ randomName: randomValue });
  }

  showClock() {
    this.setState({ isClockVisible: true });
  }

  hideClock() {
    this.setState({ isClockVisible: false });
  }

  render() {
    const { randomName, isClockVisible } = this.state;

    return (
      <main>
        <section className="container">
          <h1 className="container__title">
            {`React clock: ${randomName}`}
          </h1>

          <h2 className="container__time">
            {'Current time: '}
            {isClockVisible ? <Clock /> : ''}
          </h2>

          <button
            type="button"
            className="container__show button"
            onClick={() => this.showClock()}
          >
            Show clock
          </button>

          <button
            type="button"
            className="container__hide button"
            onClick={() => this.hideClock()}
          >
            Hide clock
          </button>

          <button
            type="button"
            className="container__random button"
            onClick={() => this.setRandomName()}
          >
            Set random name
          </button>
        </section>
      </main>
    );
  }
}

export default App;
