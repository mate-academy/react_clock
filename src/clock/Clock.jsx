import React from 'react';
import PropTypes from 'prop-types';

export const Clock = ({ currentTime }) => (
  <p>
    Current time:
    {` ${currentTime} `}
  </p>
);

Clock.propTypes = {
  currentTime: PropTypes.string.isRequired,
};
