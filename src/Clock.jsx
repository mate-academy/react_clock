/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    setInterval(() => {
      if (this.props.isClockVisible) {
        const newDate = new Date().toLocaleTimeString();

        this.setState({
          time: newDate,
        });

        console.log(newDate);
      }
    }, 1000);
  }

  render() {
    return (
      <span>
        {this.state.time}
      </span>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
};
