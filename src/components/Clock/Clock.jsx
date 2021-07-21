import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <div className="clock">
        <p>
          Current time:
          {' '}
          {this.state.time}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
