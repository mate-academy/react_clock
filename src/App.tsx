import React from 'react';
import './App.scss';
import { Clock, StateApp } from './Clock';

type Props = {};

export class App extends React.Component<Props, StateApp> {
  state = {
    isClockVisible: true,
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        {isClockVisible && <Clock />}
        <button
          type="button"
          className="button button__show-clock"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="button button__hide-clock"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}
