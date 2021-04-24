import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`
        The Clock war renamed from ${prevProps.name} to ${this.props.name}
      `);
    }
    // eslint-disable-next-line
    console.log(this.state.time);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return <>{this.state.time}</>;
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
