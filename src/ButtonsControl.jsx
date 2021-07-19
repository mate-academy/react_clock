import React from 'react';
import { clockProps } from './propstypes';

export const ButtonsControl = ({ hide, show, random }) => (
  <>
    <button
      type="button"
      onClick={() => {
        show();
      }}
    >
      Show time
    </button>
    <button
      type="button"
      onClick={() => {
        hide();
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

ButtonsControl.propTypes = clockProps;
