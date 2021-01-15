import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  };

  timer = setInterval(() => {
    this.setState({
      time: new Date(),
    });

    // eslint-disable-next-line
    console.log(new Date().toLocaleTimeString());
  }, 1000);

  componentDidUpdate(prevProps) {
    if (this.props.timerId !== prevProps.timerId) {
      // eslint-disable-next-line
      console.log(`The timer was renamed to ${this.props.timerId}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);

    // eslint-disable-next-line
    console.log('Stopped');
  }

  render() {
    return (
      <span>
        {this.state.time.toLocaleTimeString()}
      </span>
    );
  }
}

Clock.propTypes = {
  timerId: PropTypes.number.isRequired,
};
