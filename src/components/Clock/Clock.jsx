import React from 'react';
import PropTypes from 'prop-types';

export const Clock = ({ date }) => (
  <p>
    Current time:
    { date.toLocaleTimeString() }
  </p>
);

Clock.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
