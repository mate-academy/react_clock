import React from 'react';
import PropTypes from 'prop-types';
import './buttons.scss';

export const Buttons = ({ hideClock, showClock, randomName }) => (
  <div className="clock__buttons">
    <button
      type="button"
      className="button buttonHide"
      onClick={hideClock}
    >
      hide
    </button>

    <button
      type="button"
      className="button buttonShow"
      onClick={showClock}
    >
      show
    </button>

    <button
      type="button"
      className="button randomName"
      onClick={randomName}
    >
      random name
    </button>
  </div>
);

Buttons.propTypes = {
  hideClock: PropTypes.func.isRequired,
  showClock: PropTypes.func.isRequired,
  randomName: PropTypes.func.isRequired,
};
