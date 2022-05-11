import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'React Clock',
    isClockVisible: true,
  };

  namesForClock = [
    'Big Ben',
    'Peace Tower',
    'Prague Astronomical Clock',
    'World Clock',
    'Rajabai Tower',
    'Grand Central Terminal',
  ];

  componentDidUpdate(_prevProps: never, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: this.namesForClock[Math.floor(Math.random()
          * this.namesForClock.length)],
      });
    }
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="app">
        <h1 className="clock">{clockName}</h1>

        {isClockVisible && (<Clock />)}

        <button
          className="button button__show"
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          className="button button__change"
          type="button"
          onClick={this.changeName}
        >
          Change Name
        </button>

        <button
          className="button button__hide"
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}
