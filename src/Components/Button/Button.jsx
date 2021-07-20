import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ show, hide, changeName }) => (
  <div className="button__container">
    <button
      className="App__button"
      type="button"
      onClick={show}
    >
      Show time
    </button>
    <button
      className="App__button"
      type="button"
      onClick={hide}
    >
      Stop time
    </button>
    <button
      className="App__button"
      type="button"
      onClick={changeName}
    >
      Change name
    </button>
  </div>
);

Button.propTypes = {
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default Button;
