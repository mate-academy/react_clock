import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type ClockBasic = {
  hasClock: boolean;
  name: number;
};

export class App extends React.Component<{}, ClockBasic> {
  state = {
    hasClock: true,
    name: 1,
  };

  componentDidMount() {
    const clear = document.getElementById('clear');
    const start = document.getElementById('start');

    if (clear) {
      clear.addEventListener('click', () => this.setState(
        { hasClock: false },
      ));
    }

    if (start) {
      start.addEventListener('click', () => this.setState(
        { hasClock: true },
      ));
    }

    setInterval(() => this.setState(
      { name: Math.floor(Math.random() * 300 + 1) },
    ), 3300);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="clock">
        {hasClock
          ? <Clock name={this.state.name} />
          : <div className="clock__info" />}

        <div className="clock__bottom">
          <button
            type="button"
            id="clear"
            className="clock__button"
            disabled={!this.state.hasClock}
          >
            Clear
          </button>

          <button
            type="button"
            id="start"
            className="clock__button"
            disabled={this.state.hasClock}
          >
            Start
          </button>
        </div>
      </div>

    );
  }
}

export default App;
