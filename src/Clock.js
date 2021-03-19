/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(
        { time: new Date().toLocaleTimeString() },
      );
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line max-len
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <span className="clock">{this.state.time}</span>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.string.isRequired,
};
