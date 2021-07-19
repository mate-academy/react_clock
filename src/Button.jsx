import React from 'react';
import { clockProps } from './propstypes';

export const Button = ({ hide, show, random }) => (
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

Button.propTypes = clockProps;
