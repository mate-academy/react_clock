import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
    time: new Date(),
    clockNum: -1,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isClockVisible) {
        this.setState({ time: new Date() });
        // eslint-disable-next-line
        console.log(this.state.time.toLocaleTimeString());
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockNum !== this.state.clockNum) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.clockNum} to ${this.state.clockNum}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
        <button
          type="button"
          className="btn set-name"
          onClick={() => {
            this.setState({ clockNum: Math.round(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
