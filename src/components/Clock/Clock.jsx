import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

class Clock extends React.Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const { number } = this.props;
    const { time } = this.state;

    return (
      <div className="app__clock clock">
        <p className="clock__text">
          Current time:
          { ' '}
          <span className="clock__time">{time.toLocaleTimeString()}</span>
        </p>
        <p className="clock__text">
          Clock&apos;s number:
          { ' '}
          <span className="clock__number">{number}</span>
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Clock;
