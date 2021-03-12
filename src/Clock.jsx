import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clockName !== this.props.clockName) {
      /* eslint-disable-next-line no-console */
      console.log(
        `The Clock was renamed from \
        ${prevProps.clockName} to ${this.props.clockName}.`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { date } = this.state;

    /* eslint-disable-next-line no-console */
    console.log(date.toLocaleTimeString());

    return (
      <p>Current time: {date.toLocaleTimeString()}</p>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
