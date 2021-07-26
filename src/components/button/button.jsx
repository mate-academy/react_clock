import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Buttons = ({ setClockName, hide, show }) => (
  <div className="container">
    <button
      className="button"
      type="button"
      onClick={hide}
    >
      <span className="span">
        Show Clock
      </span>
    </button>
    <button
      className="button button-hide"
      type="button"
      onClick={show}
    >
      <span className="span">
        Hide Clock
      </span>
    </button>
    <button
      className="random"
      type="button"
      onClick={setClockName}
    >
      <span className="random-span">
        Set random name
      </span>
    </button>
  </div>
);

Buttons.propTypes = {
  setClockName: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

export default Buttons;
