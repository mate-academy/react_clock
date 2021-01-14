import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  time = setInterval(() => {
    this.setState({ date: new Date() });

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }, 1000);

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        <span>{date.toLocaleTimeString()}</span>
        <br />
        <br />
        <br />
        <span>{this.props.name}</span>
      </>
    );
  }
}

export default Clock;

Clock.propTypes = {
  name: PropTypes.number,
};

Clock.defaultProps = {
  name: '',
};
