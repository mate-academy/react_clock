import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());

    return (
      <>
        Clock name:
        {' '}
        {this.props.clockName}
        <br />
        Current time:
        {' '}
        {date.toLocaleTimeString()}
      </>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};

export default Clock;
