import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Clock extends Component {
  static propTypes = {
    clockName: PropTypes.number.isRequired,
    initialValue: PropTypes.string.isRequired,
  }

  componentDidUpdate(prevProps, _) {
    const { clockName: prev } = this.props;
    const { clockName: current } = prevProps;

    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prev} to ${current}`);
    }
  }

  render() {
    const { initialValue } = this.props;

    return (
      <p>
        {`Current time: ${initialValue}`}
      </p>
    );
  }
}

export default Clock;
