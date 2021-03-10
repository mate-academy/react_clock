import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  }

  static propTypes = {
    clockName: PropTypes.number.isRequired,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();

      this.setState({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
  }

  componentDidUpdate({ clockName: prevName }) {
    const { clockName } = this.props;

    if (prevName !== this.props.clockName) {
      window.console.log(
        'The Clock was renamed from',
        prevName,
        'to',
        clockName,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const normalizeValue = num => ((num > 9) ? `${num}` : `0${num}`);
    const hours = normalizeValue(this.state.hours);
    const minutes = normalizeValue(this.state.minutes);
    const seconds = normalizeValue(this.state.seconds);

    window.console.log(
      `${hours}:${minutes}:${seconds}`,
    );

    return (
      <p>
        Current time:&nbsp;
        <strong>
          <span>{hours}</span>
          {' : '}
          <span>{minutes}</span>
          {' : '}
          <span>{seconds}</span>
        </strong>
      </p>
    );
  }
}
