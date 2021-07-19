import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ show, hide }) => (
  <>
    <button
      className="App__button"
      type="button"
      onClick={show}
    >
      Show time
    </button>
    <button
      className="App__button"
      type="button"
      onClick={hide}
    >
      Stop time
    </button>
  </>
);

Button.propTypes = {
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

export default Button;
