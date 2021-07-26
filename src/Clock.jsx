import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.name} `
        + `to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.date}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Clock;
