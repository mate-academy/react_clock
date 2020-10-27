import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      const date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="clock">
        <p className="clock__Name">
          Clock name:
          {this.props.name}
        </p>
        <p className="clock__Time">
          Current time:
          {this.state.time}
        </p>
      </div>

    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Clock;
