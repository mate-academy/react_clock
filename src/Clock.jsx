import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.watch = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.ClockName !== prevProps.ClockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from: ${prevProps.name}`
      + ` to: ${this.props.ClockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.watch);
  }
  
  render() {
    return (
      <h3>
        {this.state.time}
      </h3>
    );
  }
}

Clock.propTypes = {
  ClockName: PropTypes.number.isRequired,
};
