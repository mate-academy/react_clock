import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  static propTypes = {
    isClockVisible: PropTypes.bool.isRequired,
  }

  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  tick() {
    if (this.props.isClockVisible) {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }
  }

  render() {
    const { time } = this.state;
    const { isClockVisible } = this.props;

    return (
      <span
        className="Clock"
        hidden={!isClockVisible}
      >
        {time}
      </span>
    );
  }
}
