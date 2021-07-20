import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.startClock();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(
        'The Clock was renamed from '
        + `${prevProps.clockName} to ${this.props.clockName}.`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  startClock() {
    this.timeInterval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  render() {
    return (
      <>
        Current time:
        {' '}
        {this.state.time}
      </>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.string.isRequired,
};
