import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="card-text text-center">
        <div className="clock__name mt-3">
          Clock id:
          {' '}
          <span className="font-weight-bold">{name}</span>
        </div>

        <div className="card-text mt-3">
          Current time
          {' '}
          <span className="font-weight-bold">{date}</span>
        </div>
      </div>
    );
  }
}

export default Clock;

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
