import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// const { PureComponent } = require('react');

export class Clock extends PureComponent {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.stopClock();
  }

  startClock = () => {
    this.timerID = setInterval(() => {
      this.tick();

      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  stopClock = () => {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <p className="clock__name">
          {`Clock Name:  #${this.props.name}`}
        </p>
        <p>
          Current time:
          {' '}
          <strong>
            {this.state.date.toLocaleTimeString()}
          </strong>
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
