import React from 'react';
import PropTypes from 'prop-types';

import './clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <p className="clock">
        <span className="clock__timer">
          {this.state.time}
          {' '}
        </span>
        {`Clock's name: ${this.props.name}`}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
