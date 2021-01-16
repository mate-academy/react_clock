import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { isClockVisible } = this.props;
    const { time } = this.state;

    if (isClockVisible) {
      // eslint-disable-next-line no-console
      console.log(time.toLocaleTimeString());
    }

    return (
      <>
        <p>
          Current time:
          {' '}
          {isClockVisible && time.toLocaleTimeString()}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
};
