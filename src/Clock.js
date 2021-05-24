import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.startClock();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.props.name) {
      window.console.log(
        // eslint-disable-next-line
        `The Clock was renamed from ${prevState.name} to ${this.props.clockName}.`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getClock() {
    if (this.state.isClockVisible) {
      return this.state.time;
    }

    return null;
  }

  startClock() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      window.console.log(this.state.time);
    }, 1000);
  }

  render() {
    return this.state.time;
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Clock;
