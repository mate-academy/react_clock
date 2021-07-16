import React from 'react';
import PropTypes from 'prop-types';

export const ClockControls = props => (
  <>
    <button
      type="button"
      onClick={props.showClock.bind(props.app)}
    >
      Show Clock
    </button>
    <button
      type="button"
      onClick={props.hideClock.bind(props.app)}
    >
      Hide Clock
    </button>
    <button
      type="button"
      onClick={props.changeName.bind(props.app)}
    >
      Set random name
    </button>
  </>
);

ClockControls.propTypes = {
  app: PropTypes.shape({
    isClockVisible: PropTypes.bool.isRequired,
    clockName: PropTypes.number.isRequired,
  }).isRequired,
  hideClock: PropTypes.func.isRequired,
  showClock: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
};
