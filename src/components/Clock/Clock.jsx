import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(this.startClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startClock = () => {
    this.setState(
      { currentTime: new Date().toLocaleTimeString() },
    );
    // eslint-disable-next-line
    console.log(this.state.currentTime);
  }

  render() {
    return (
      <>
        {`Current time: ${this.state.currentTime}`}
      </>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.string.isRequired,
};
