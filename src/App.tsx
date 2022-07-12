import React from 'react';
import { clearInterval } from 'timers';
import './App.scss';
import { Clock } from './components/Clock';

type ClockBasic = {
  hasClock: boolean,
  name: number,
};

export class App extends React.Component<{}, ClockBasic> {
  state = {
    hasClock: true,
    name: 1,
  };

  randomName = setInterval(() => this.setState(
    { name: Math.floor(Math.random() * 400 + 1) },
  ), 3300);

  componentDidMount() {
    const clear = document.getElementById('claer');
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
  }

  componentWillUnmount() {
    clearInterval(this.randomName);
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="clock">
        {hasClock
          ? <Clock name={this.state.name} />
          : <div className="clock__info" />}

        <div className="clock__button">
          <button
            type="button"
            id="clear"
            className="button"
            disabled={!this.state.hasClock}
          >
            Clear
          </button>

          <button
            type="button"
            id="start"
            className="button"
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
