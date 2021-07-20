import React from 'react';
import PropTypes from 'prop-types';

const ButtonChangeName = ({ changeName }) => (
  <button
    className="App__button"
    type="button"
    onClick={changeName}
  >
    Change name
  </button>
);

ButtonChangeName.propTypes = {
  changeName: PropTypes.func.isRequired,
};

export default ButtonChangeName;
