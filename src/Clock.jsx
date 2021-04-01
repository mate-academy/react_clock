import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.step(),
      1000,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  step() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time } = this.state;

    return (
      <span className="clock">{time.toLocaleTimeString()}</span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
