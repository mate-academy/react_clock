import React from 'react';
import { buttonControlProps } from './propstypes';

export const ButtonsControl
= ({ changeClockVisability, getRandomClockName }) => (
  <>
    <button
      type="button"
      onClick={changeClockVisability}
    >
      Show time
    </button>
    <button
      type="button"
      onClick={changeClockVisability}
    >
      Hide time
    </button>
    <button
      type="button"
      onClick={getRandomClockName}
    >
      Random name
    </button>
  </>
);

ButtonsControl.propTypes = buttonControlProps;
