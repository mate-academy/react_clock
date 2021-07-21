import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  timeInterval = 0;

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(
        'The Clock was renamed from'
        + ` ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  tick() {
    this.timeInterval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <p className="box is-size-3 has-text-primary-dark">
        {`Current time: ${time}`}
      </p>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.string.isRequired,
};
