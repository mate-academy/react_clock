import React from 'react';
import './Buttons.scss';

type Props = {
  isClockVisible: boolean;
  showClock(): void;
  hideClock(): void;
  randomName(): void;
};

export const Buttons: React.FC<Props> = ({
  isClockVisible,
  showClock,
  hideClock,
  randomName,
}) => (
  <div className="App__buttons buttons">
    <button
      className="button button__show-clock"
      type="button"
      onClick={showClock}
      disabled={isClockVisible}
    >
      Show Clock
    </button>
    <button
      className="button button__hide-clock"
      type="button"
      onClick={hideClock}
      disabled={!isClockVisible}
    >
      Hide Clock
    </button>
    <button
      className="button button__set-random-name"
      type="button"
      onClick={randomName}
      disabled={!isClockVisible}
    >
      Set random name
    </button>
  </div>
);
