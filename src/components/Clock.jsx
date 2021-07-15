import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(this.goClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  goClock = () => {
    this.setState(
      { time: new Date().toLocaleTimeString() },
      () => console.log(this.state.time),
    );
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        { this.state.time }
      </p>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};

export default Clock;
