import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Buttons = ({ onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
    className="button"
  >
    {text}
  </button>
);

Buttons.propTypes = {
  onClick: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Buttons;
