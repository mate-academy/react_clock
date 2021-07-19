import React from 'react';
import testPropTypes from '../PropTypes/buttonPropTypes';

const Button = ({ hide, show, changeName }) => (
  <div className="App__button-container">
    <button
      className="App__button"
      type="button"
      onClick={() => {
        show();
      }}
    >
      Show time
    </button>
    <button
      className="App__button"
      type="button"
      onClick={() => {
        hide();
      }}
    >
      Stop time
    </button>
    <button
      className="App__button"
      type="button"
      onClick={() => {
        changeName();
      }}
    >
      Change name
    </button>
  </div>
);

Button.propTypes = testPropTypes;

export default Button;
