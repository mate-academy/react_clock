import React from 'react';
import PropTypes from 'prop-types';
import './clock.scss';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerInterval = setInterval(this.setTimer, 1000);
  }

  componentDidUpdate(prevState) {
    const { name } = this.props;

    if (prevState.name !== name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  setTimer = () => {
    this.setState({ time: new Date().toLocaleTimeString() });

    // eslint-disable-next-line
    console.log( new Date().toLocaleTimeString());
  }

  render() {
    return (
      <>
        Current time:
        {' '}
        <span className="time">
          { this.state.time }
        </span>
      </>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};
