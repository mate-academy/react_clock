import React from 'react';
import PropTypes from 'prop-types';

export const ClockControls = props => (
  <>
    <button
      type="button"
      onClick={() => {
        props.app.showClock();
      }}
    >
      Show Clock
    </button>
    <button
      type="button"
      onClick={() => {
        props.app.hideClock();
      }}
    >
      Hide Clock
    </button>
    <button
      type="button"
      onClick={() => {
        props.app.changeName();
      }}
    >
      Set random name
    </button>
  </>
);

ClockControls.propTypes = {
  app: PropTypes.shape({
    hideClock: PropTypes.func.isRequired,
    showClock: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
  }).isRequired,
};
