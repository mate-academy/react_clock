import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.startClock();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.name} to ${this.props.name}.`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startClock() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line
      console.log(this.state.time);
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
