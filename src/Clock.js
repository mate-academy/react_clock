import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString('en-GB'),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString('en-GB'),
      });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name}`
        + ` to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <p className="clock">
        Current time:
        {' '}
        {time}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Clock;
