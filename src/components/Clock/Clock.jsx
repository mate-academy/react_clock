
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
    // eslint-disable-next-line
    console.log(this.state.time);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return this.state.time;
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
