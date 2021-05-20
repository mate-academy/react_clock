import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(props) {
    if (this.props.name !== props.name) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${props.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="clock">
        <h2 className="clock__title">
          {this.props.name}
        </h2>
        <p className="clock__time">
          Current time:
          <br />
          {time}
        </p>
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};

export default Clock;
