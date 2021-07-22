import React from 'react';
import propTypes from 'prop-types';
import './button.scss';

export const Button = ({ props, text, styles }) => (
  <div>
    <button type="button" onClick={props} className={styles}>
      {text}
    </button>
  </div>
);

Button.propTypes = {
  props: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  styles: propTypes.string.isRequired,
};
