import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        <span>{date.toLocaleTimeString()}</span>
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
