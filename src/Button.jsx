import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => (
  <div className="button__wrapper">
    <button
      className="button"
      type="button"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
