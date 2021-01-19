import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  componentDidUpdate(prev) {
    if (prev.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prev.name} to ${this.props.name}`,
      );
    }
  }

  render() {
    return (
      <>
        <p>
          Current time:
          {' '}
          {this.props.time}
        </p>
      </>
    );
  }
}

Clock.propTypes = PropTypes.shape(
  {
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isClockVisible: PropTypes.bool.isRequired,
  },
).isRequired;
