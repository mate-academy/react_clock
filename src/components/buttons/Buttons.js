import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({ handleClick, changeName }) => (
  <div>
    <button type="button" onClick={changeName}>Change name</button>
    <button type="button" onClick={handleClick}>Hidden clock</button>
  </div>
);

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
};
