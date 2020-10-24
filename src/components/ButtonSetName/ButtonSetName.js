import React from 'react';
import PropTypes from 'prop-types';

export const ButtonSetName = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Set name
  </button>
);

ButtonSetName.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
