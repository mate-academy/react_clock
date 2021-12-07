import React from 'react';
import './App.scss';

import { Clock } from './component/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number | string,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'WAKE UP, NEO, THE MATRIX HAS YOU!',
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  generateRandomClockName = () => this.setState({ clockName: Math.round(Math.random() * 100) });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="clocks">
        <div className="clocks__container">
          <h1 className="clocks__title">NO MORE REACT CLOCK PLEASE ;)</h1>
          <p>
            {clockName}
            <br />
            <div className="clocks__time">{isClockVisible && <Clock clockName={clockName} />}</div>
            <br />
            <div className="clocks__buttons">
              <button type="button" className="clocks__button" disabled={isClockVisible} onClick={this.showClock}>
                Show Clock
              </button>
              <br />
              <button type="button" className="clocks__button" disabled={!isClockVisible} onClick={this.hideClock}>
                Hide Clock
              </button>
              <br />
              <button type="button" className="clocks__button" onClick={this.generateRandomClockName}>
                Set Random Name
              </button>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
