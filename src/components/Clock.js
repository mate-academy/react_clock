/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    console.log(this.state.date.toLocaleTimeString());

    if (prevProps.name === this.props.name) {
      return;
    }

    console.log(
      `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;

    return (
      <>
        {date.toLocaleTimeString()}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
