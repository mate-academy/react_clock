import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000,
    );
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    const { hidden } = this.props;

    return (
      <p hidden={hidden}>
        Current time:
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  hidden: PropsTypes.bool.isRequired,
};

export default Clock;
