import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line
    console.log(
      prevProps.name === this.props.name
        ? this.state.date
        : `The clock was renamed from ${prevProps.name} to ${this.props.name}`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return this.state.time;
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
