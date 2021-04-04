import React from 'react';
import PropTypes from 'prop-types';

export const Clock = ({ name, date }) => (
  <>
    <p>
      Clock #
      {name}
    </p>
    <p>
      Current time:
      { date.toLocaleTimeString() }
    </p>
  </>
);

Clock.propTypes = {
  name: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
};
