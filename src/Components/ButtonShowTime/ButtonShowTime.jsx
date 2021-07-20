import React from 'react';
import PropTypes from 'prop-types';

const ButtonShowTime = ({ show }) => (
  <button
    className="App__button"
    type="button"
    onClick={show}
  >
    Show time
  </button>
);

ButtonShowTime.propTypes = {
  show: PropTypes.func.isRequired,
};

export default ButtonShowTime;
