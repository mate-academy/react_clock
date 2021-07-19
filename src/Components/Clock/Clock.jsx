import React from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.state.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prev) {
    return (prev.name !== this.props.name)
    // eslint-disable-next-line no-console
      && console.log(
        `The Clock was renamed from ${prev.name} to ${this.props.name}`,
      );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    const { date } = this.state;

    // eslint-disable-next-line no-console
    console.log(date.toLocaleTimeString());

    return (
      <>
        <p className="timer-block__time">{date.toLocaleTimeString()}</p>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
