/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setState({ date: new Date() });
        this.showTime();
      },
      1000,
    );
  }

  componentDidUpdate(prev) {
    const { name } = this.props;

    if (name !== prev.name) {
      console.log(`The Clock was renamed from ${prev.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  showTime() {
    if (this.props.isClockVisible) {
      console.log(this.state.date.toLocaleTimeString());
    }
  }

  render() {
    const { isClockVisible } = this.props;
    const { date } = this.state;

    return (
      <>
        <p>
          Current time:
          {' '}
          {isClockVisible
            ? date.toLocaleTimeString()
            : null}
        </p>
      </>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
  name: PropTypes.number.isRequired,
};
