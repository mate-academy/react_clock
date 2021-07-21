import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export function Button({ text, action }) {
  return (
    <button
      type="button"
      onClick={action}
      className="button"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
