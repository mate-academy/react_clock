import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    clockName: this.props.name,
    date: new Date(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      // eslint-disable-next-line
      this.setState({ clockName: this.props.name });
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <span>
        {`for ${this.state.clockName}:
        ${this.state.date.toLocaleTimeString()}`}
      </span>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string,
};

Clock.defaultProps = {
  name: 'noneRandomName',
};

export default Clock;
