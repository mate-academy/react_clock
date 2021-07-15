import React from 'react';
import PropTypes from 'prop-types';


export const Clock = ({ date }) => (
  <p>
    Current time:
    { date.toLocaleTimeString() }
  </p>
);

Clock.propTypes = {
  // eslint-disable-next-line react/no-typos
  date: PropTypes.instanceOf(Date).isRequired,
};
