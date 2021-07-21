import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './buttons.scss';

export const Buttons = ({ clickFunc, buttonClass, buttonText }) => {
  const classes = ClassNames('button', buttonClass);

  return (
    <button
      type="button"
      className={classes}
      onClick={clickFunc}
    >
      {buttonText}
    </button>
  );
};

Buttons.propTypes = {
  clickFunc: PropTypes.func.isRequired,
  buttonClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
