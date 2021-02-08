import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Clock extends Component {
  state = {
    dataLocalTime: null,
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line
      this.setState({ dataLocalTime: date.toLocaleTimeString()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <>
        <p>
          Current time:
          {' '}
          { this.state.dataLocalTime }
        </p>
        <p>
          {this.props.name}
          {' '}
          {this.props.time}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.oneOfType([
    // PropTypes.oneOf([null]),
    PropTypes.string,
  ]).isRequired,

  time: PropTypes.oneOfType([
    // PropTypes.oneOf([null]),
    PropTypes.number,
  ]).isRequired,
};

// PropTypes.oneOfType([
//   PropTypes.string.isRequired,
//   PropTypes.oneOf([null]).isRequired,
// ]).isRequired
