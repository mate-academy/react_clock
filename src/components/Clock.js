import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Clock extends Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <p>
          Current time:
          {' '}
          { this.state.date }
        </p>
      </div>
    );
  }
}

Clock.propType = {
  name: PropTypes.number.isRequired,
};
