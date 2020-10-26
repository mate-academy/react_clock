import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.stopCLock();
  }

  startClock = () => {
    this.timeInterval = setInterval(() => {
      this.tick();

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  stopCLock = () => {
    clearInterval(this.timeInterval);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <p>
          Clock Name
          {' '}
          {this.props.name}
        </p>
        <p>
          Current time:
          {this.state.date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}

Clock.propTypes = PropTypes.shape({
  name: PropTypes.number.isRequired,
}).isRequired;
