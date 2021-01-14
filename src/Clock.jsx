import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prefer-stateless-function */

export class Clock extends React.Component {
  static propTypes = {
    time: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
    name: PropTypes.number.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${
        prevProps.name} to ${
        this.props.name}`);
    }
  }

  render() {
    const { time, visibility } = this.props;

    return (
      <div>
        <p>
          Current time:
          {' '}
          {visibility ? time : ''}
        </p>
      </div>
    );
  }
}
