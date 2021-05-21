import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ date: new Date() });
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.newClockName !== this.props.newClockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from`
      + ` ${prevProps.newClockName} to ${this.props.newClockName}`);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.interval);
  }

  render() {
    return (
      <span>
        {this.state.time}
      </span>
    );
  }
}

Clock.propTypes = {
  newClockName: PropTypes.string.isRequired,
};
