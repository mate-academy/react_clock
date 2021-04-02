import React from 'react';
import PropTypes from 'prop-types';
import './clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    return (
      <p className="timer">
        {`Current time: ${this.state.date.toLocaleTimeString()}`}
      </p>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
