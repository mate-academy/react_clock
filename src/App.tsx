import React from 'react';
// eslint-disable-next-line
import { Clock } from './components/Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
  nameId: number;
};

export const names = [
  'Christmas Clock',
  'Ho Ho Ho',
  'Happy New Year',
  'Merry Christmas',
  'Christmas is in the Air',
  'O Christmas Tree',
  'Good luck',
  'Christmas is Coming',
  'Ding dong',
  'Santa’s Little Helper',
  'Jingle All the Way',
];

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    nameId: 0,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  changeName = () => {
    const randomizer = Math.ceil(Math.random() * 10);

    this.setState({ nameId: randomizer });
  };

  render() {
    const { isClockVisible, nameId } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {
            nameId
              ? names[nameId]
              : 'Christmas Clock'
          }
        </h1>
        {
          isClockVisible
          && (
            <p className="app__clock">
              <Clock nameId={this.state.nameId} />
            </p>
          )
        }
        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            disabled={!isClockVisible}
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            className="app__button"
            type="button"
            disabled={isClockVisible}
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.changeName}
          >
            Secret Button
          </button>
        </div>

      </div>
    );
  }
}
