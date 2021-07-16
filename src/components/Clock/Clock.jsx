import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.isClockVisible) {
        this.setState({ date: new Date().toLocaleTimeString() });

        // eslint-disable-next-line no-console
        console.log(this.state.date);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {

    return (
      <>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>

      </>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
};

export default Clock;
