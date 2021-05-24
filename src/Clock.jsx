import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(), 1000,
    );
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line no-console
    console.log(
      prevProps.name === this.props.name
        ? this.state.date.toLocaleTimeString()
        // eslint-disable-next-line max-len
        : `The Clock was renamed from Number:${prevProps.name} to Number:${this.props.name}`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date.toLocaleTimeString()}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
