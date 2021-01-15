import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {
  state = {
    date: new Date(),
  }

  timer = setInterval(() => {
    this.setState({
      date: new Date(),
    });
  }, 1000)

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        'The Clock was renamed from oldName to newName', this.props.name,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const currDate = this.state.date;
    // eslint-disable-next-line
    console.log(currDate.toLocaleTimeString())

    return (
      <>{currDate.toLocaleTimeString()}</>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
