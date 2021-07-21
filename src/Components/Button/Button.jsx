import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ name, onClick }) => (
  <>
    <button
      onClick={onClick}
      className="button"
      type="button"
    >
      {name}
    </button>
  </>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
