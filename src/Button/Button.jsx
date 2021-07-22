import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, styles, onclick }) => (
  <button
    type="submit"
    onClick={onclick}
    className={styles}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};
