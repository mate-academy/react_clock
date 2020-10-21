import React from 'react';
import { ButtonSetNameShape } from '../shapes/ButtonSetNameShape';

export const ButtonSetName = ({ click }) => (
  <button type="button" onClick={click}>
    Set name
  </button>
);

ButtonSetName.propTypes = ButtonSetNameShape;
