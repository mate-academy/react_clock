import React from 'react';
import { ButtonShape } from '../shapes/ButtonShape';

export const Button = ({ click }) => (

  <button type="button" onClick={click}>
    Toggle clock
  </button>
);

Button.propTypes = ButtonShape;
