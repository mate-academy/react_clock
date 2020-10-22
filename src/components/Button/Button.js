import React from 'react';
import { ButtonShape } from '../shapes/ButtonShape';

export const Button = ({ handleClick }) => (

  <button type="button" onClick={handleClick}>
    Toggle clock
  </button>
);

Button.propTypes = ButtonShape;
