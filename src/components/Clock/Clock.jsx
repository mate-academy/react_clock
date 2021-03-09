import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Clock extends Component {
  state = {
    timer: new Date(),
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      const time = new Date();

      // eslint-disable-next-line
      console.log(time.toLocaleTimeString());
      this.setState({ timer: time });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { clockName: prev } = this.props;
    const { clockName: current } = prevProps;

    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prev} to ${current}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    const { timer } = this.state;

    return (
      <p>
        {
          `Current time: ${timer.toLocaleTimeString()}`
        }
      </p>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
