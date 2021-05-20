import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
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
        {` for ${this.props.name}:
        ${this.state.date}`}
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
