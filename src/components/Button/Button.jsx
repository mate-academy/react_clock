import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export function Button({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="button"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
