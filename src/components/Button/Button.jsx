import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ messege, hide, show }) => (
  <>
    <button
      type="button"
      onClick={hide}
    >
      Show Clock
    </button>
    <button
      type="button"
      onClick={show}
    >
      Hide Clock
    </button>
    <button
      type="button"
      onClick={messege}
    >
      Set random name
    </button>
  </>
);

Button.propTypes = {
  messege: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

export default Button;
