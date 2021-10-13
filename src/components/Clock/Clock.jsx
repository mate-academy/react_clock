import React from 'react';
import PropTypes from 'prop-types';

import './Clock.scss';

const currentTime = () => new Date().toLocaleTimeString();

export class Clock extends React.Component {
  state = {
    time: currentTime(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: currentTime() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line
    console.log(
      prevProps.name === this.props.name
        ? this.state.time
        // eslint-disable-next-line
        : `The Clock was renamed from "${prevProps.name}" to "${this.props.name}"`,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="clock">
        {time}
      </div>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.string.isRequired,
};
