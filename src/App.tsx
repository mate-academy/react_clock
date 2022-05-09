import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  clockName: string,
  isClockVisible: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 'Kyiv',
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    const names = ['Kyiv', 'Helsinki', 'Jerusalem', 'Athens', 'Riga', 'Vilnius',
      'Tallinn', 'Chișinău ', 'Bucharest'];

    const randomChoice = names[Math.floor(Math.random() * names.length)];

    this.setState({ clockName: randomChoice });
  };

  render() {
    const {
      clockName,
      isClockVisible,
    } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">{clockName}</h1>
        {isClockVisible && <Clock clockName={clockName} />}
        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={this.showClock}
          >
            Show
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.setRandomName}
          >
            Rename
          </button>
        </div>
      </div>
    );
  }
}
