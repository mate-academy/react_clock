import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.clockRunning(), 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The clock name ${prevProps.clockName} was changed to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  clockRunning() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }

  render() {
    return (
      <p className="clock">
        {`Current time:
        ${this.state.time}`}
      </p>
    );
  }
}

Clock.propTypes = {
  clockName: PropTypes.number.isRequired,
};
