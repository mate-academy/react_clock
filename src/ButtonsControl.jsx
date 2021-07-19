import React from 'react';
import { buttonControlProps } from './propstypes';

export const ButtonsControl = ({ visible, random }) => (
  <>
    <button
      type="button"
      onClick={() => {
        visible();
      }}
    >
      Show time
    </button>
    <button
      type="button"
      onClick={() => {
        visible();
      }}
    >
      Hide time
    </button>
    <button
      type="button"
      onClick={() => {
        random();
      }}
    >
      Random name
    </button>
  </>
);

ButtonsControl.propTypes = buttonControlProps;
