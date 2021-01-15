import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component {
  render() {
    const { time, isClockVisible } = this.props;

    if (isClockVisible) {
      // eslint-disable-next-line no-console
      console.log(time.toLocaleTimeString());
    }

    return (
      <>
        <p>
          Current time:
          {isClockVisible}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  time: PropTypes.string.isRequired,
  isClockVisible: PropTypes.bool.isRequired,
};
