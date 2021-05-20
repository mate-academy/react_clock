import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
    time: new Date(),
  }

  componentDidMount() {
    if (this.state.isClockVisible) {
      this.timer();
    }
  }

  timer() {
    setInterval(() => {
      if (this.state.isClockVisible) {
        this.setState({ time: new Date() });
        // eslint-disable-next-line
        console.log(this.state.time.toLocaleTimeString());
      }
    }, 1000);
  }

  render() {
    const { clockName, isClockVisible, time } = this.state;
    const { name } = this.props;

    return (
      <>
        <h1>
          {clockName}
          {' '}
          {!(name + 1) ? '' : name}
        </h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && time.toLocaleTimeString()}
        </p>
        <button
          type="button"
          className="btn show-clock"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="btn hide-clock"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
