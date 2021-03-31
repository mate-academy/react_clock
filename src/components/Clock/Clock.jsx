import React from 'react';
import './Clock.scss';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <span className="clock__time">
          Current time:
          {' '}
          {this.state.time}
        </span>
        <br />
        <span className="clock__name">
          Current name:
          {' '}
          {this.props.name}
        </span>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
