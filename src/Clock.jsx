/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: null,
  };

  componentDidMount() {
    const timer = setInterval(() => {
      const newDate = new Date().toLocaleTimeString();

      this.setState({
        time: newDate,
      });

      console.log(newDate);
    }, 1000);

    this.setState({
      timerId: timer,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line max-len
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    const { timerId } = this.state;

    clearInterval(timerId);
  }

  render() {
    return (
      <span>
        {this.state.time}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
