import React from 'react';
import PropTypes from 'prop-types';

export const Clock = ({ currentTime, name }) => (
  <>
    <h4>{`Current time: ${currentTime}`}</h4>
    <h4>{`Current name : ${name} `}</h4>
  </>
);

Clock.propTypes = {
  currentTime: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
};
