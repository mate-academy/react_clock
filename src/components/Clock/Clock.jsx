import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line
    console.log(
      prevProps.name === this.props.name
        ? this.state.time
        : `The clock was renamed from ${prevProps.name} to ${this.props.name}`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return this.state.time;
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
