import React from 'react';
import './Clock.scss';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  intervalId = null;

  state = {
    date: new Date().toLocaleTimeString(),
    clockName: this.props.name,
  }

  componentDidMount() {
    this.runTimer();
  }

  shouldComponentUpdate() {
    const { clockName } = this.state;

    if (clockName !== this.props.name) {
      this.setState({ clockName: this.props.name });
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { clockName } = this.state;
    const oldClockName = prevState.clockName;

    if (oldClockName !== clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed`
        + ` from ${oldClockName} to ${clockName}.`);
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  runTimer = () => {
    const id = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);

    this.intervalId = id;
  }

  clearTimer = () => {
    clearInterval(this.intervalId);
  }

  render() {
    const { date } = this.state;

    // eslint-disable-next-line
    console.log(date ? `time is ${date}` : 'timer isn\'t set up yet');

    return (
      <p className="text">
        {`Current time: ${date}`}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
