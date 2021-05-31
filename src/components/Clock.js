import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

class Clock extends Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerLog = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${
        this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerLog);
  }

  render() {
    const { date } = this.state;

    return (
      <span className="Clock">
        { date }
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
