import React from 'react';

import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line
    console.log(
      prevProps.name === this.props.name
        ? this.state.date
        : `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <span>
        {this.state.date}
      </span>
    );
  }
}

Clock.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;
