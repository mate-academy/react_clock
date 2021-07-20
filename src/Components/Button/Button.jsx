import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ clockShow, clockHide, clockGetRandomName }) => (
  <>
    <button
      onClick={() => {
        clockShow();
      }}
      className="button"
      type="button"
    >
      Show Clock
    </button>
    <button
      onClick={() => {
        clockHide();
      }}
      className="button"
      type="button"
    >
      Hide Clock
    </button>
    <button
      onClick={() => {
        clockGetRandomName();
      }}
      className="button"
      type="button"
    >
      Say my name
    </button>
  </>
);

Button.propTypes = {
  clockShow: PropTypes.func.isRequired,
  clockHide: PropTypes.func.isRequired,
  clockGetRandomName: PropTypes.func.isRequired,
};
