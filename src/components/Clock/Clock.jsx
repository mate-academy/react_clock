import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed  from ${prevProps.name} to ${name}.`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;

    return (
      <span>{time}</span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
