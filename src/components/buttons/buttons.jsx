import React from 'react';
import PropTypes from 'prop-types';
import './buttons.scss';

export const Buttons = props => (
  <div className="clock__buttons">
    <button
      type="button"
      className="button buttonHide"
      onClick={props.app.hideClock}
    >
      hide
    </button>

    <button
      type="button"
      className="button buttonShow"
      onClick={props.app.showClock}
    >
      show
    </button>

    <button
      type="button"
      className="button randomName"
      onClick={props.app.randomName}
    >
      random name
    </button>
  </div>
);

Buttons.propTypes = {
  app: PropTypes.shape({
    hideClock: PropTypes.func.isRequired,
    showClock: PropTypes.func.isRequired,
    randomName: PropTypes.func.isRequired,
  }).isRequired,
};
