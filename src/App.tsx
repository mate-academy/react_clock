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
  'Christmas Tree',
  'Good luck to You',
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

  toggleClock = () => {
    this.setState(prevState => ({ isClockVisible: !prevState.isClockVisible }));
  };

  changeName = () => {
    const randomizer = Math.floor(Math.random() * names.length);

    this.setState({ nameId: randomizer });
  };

  render() {
    const { isClockVisible, nameId } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {names[nameId]}
        </h1>
        {
          isClockVisible && (
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
            onClick={this.toggleClock}
          >
            Hide Clock
          </button>

          <button
            className="app__button"
            type="button"
            disabled={isClockVisible}
            onClick={this.toggleClock}
          >
            Show Clock
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.changeName}
          >
            Magic Button
          </button>
        </div>
      </div>
    );
  }
}
