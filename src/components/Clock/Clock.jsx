/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.resetTime();
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      console.log(`New name of ${prevProps.name} is ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  resetTime() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
