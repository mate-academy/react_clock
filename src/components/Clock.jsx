/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name === this.props.name) {
      return;
    }

    console.log(`The Clock was renamed from ${prevProps.name}`
      + `to ${this.props.name}`);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { date } = this.state;

    console.log(date.toLocaleTimeString());

    return (
      <p>
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
