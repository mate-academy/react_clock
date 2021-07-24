import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(this.state.time)
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const newName = this.props.name;
    const prevName = prevProps.name;

    if (newName !== prevName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <span className="clock__time">{this.state.time}</span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
