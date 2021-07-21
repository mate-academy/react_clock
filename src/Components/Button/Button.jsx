import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ name, callback }) => (
  <>
    <button
      onClick={callback}
      className="button"
      type="button"
    >
      {name}
    </button>
  </>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
