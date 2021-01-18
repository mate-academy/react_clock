import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  timer = setInterval(() => {
    this.setState({ date: new Date() });
    const { date } = this.state;
    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <span>
        {date.toLocaleTimeString()}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
