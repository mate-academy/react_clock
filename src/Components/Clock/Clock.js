import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }), 1000,
    );
  }

  componentDidUpdate({ name }) {
    if (name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
    // eslint-disable-next-line
    console.log(this.state.time);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <span>{this.state.time}</span>;
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
