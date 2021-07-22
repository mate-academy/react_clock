import React from 'react';
import { buttonPropTypes } from '../types';

import './Button.scss';

export const Button = ({ onClick, text }) => (
  <button
    type="button"
    onClick={onClick}
    className="button"
  >
    {text}
  </button>
);

Button.propTypes = buttonPropTypes;
