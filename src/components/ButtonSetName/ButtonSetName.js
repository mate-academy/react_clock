import React from 'react';
import { ButtonSetNameShape } from '../shapes/ButtonSetNameShape';

export const ButtonSetName = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Set name
  </button>
);

ButtonSetName.propTypes = ButtonSetNameShape;
