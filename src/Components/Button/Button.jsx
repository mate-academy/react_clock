import React from 'react';
import { testPropTypes } from '../PropTypes/testPropTypes';
import './Button';

const Button = ({ hide, show, changeName }) => (
  <>
    <button
      className="App__button"
      onClick={hide}
      type="submit"
    >
      Stop Time
    </button>
    <button
      className="App__button"
      onClick={show}
      type="submit"
    >
      Start Time
    </button>
    <button
      className="App__button"
      onClick={changeName}
      type="submit"
    >
      Change name
    </button>
  </>
);

Button.propTypes = testPropTypes;

export default Button;
