import PropTypes from 'prop-types';
import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString())
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;

    return (
      <span>{time.toLocaleTimeString()}</span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
