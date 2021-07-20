import React from 'react';
import PropTypes from 'prop-types';
import './ButtonHideTime.scss';

const ButtonHideTime = ({ hide }) => (
  <div className="button__container">
    <button
      className="App__button"
      type="button"
      onClick={hide}
    >
      Stop time
    </button>
  </div>
);

ButtonHideTime.propTypes = {
  hide: PropTypes.func.isRequired,
};

export default ButtonHideTime;
