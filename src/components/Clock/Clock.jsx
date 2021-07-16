import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerInterval = setInterval(this.timer, 1000);
  }

  componentDidUpdate(prevProps) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  timer = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
    console.log(this.state.time);
  }

  render() {
    return (
      <>
        {this.state.time}
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
