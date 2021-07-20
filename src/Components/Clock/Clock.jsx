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
      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prev) {
    if (prev.name !== this.props.name) {
    // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${prev.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    const { date } = this.state;

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
