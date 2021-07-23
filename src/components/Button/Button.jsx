import React from 'react';
import propTypes from 'prop-types';
import './button.scss';

export const Button = ({ onClick, text, className }) => (
  <div>
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  </div>
);

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};
