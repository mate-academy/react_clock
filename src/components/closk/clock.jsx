import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../button/button';
import './clock.scss';

class Clock extends React.Component {
  state = {
    clockName: this.props.clockName,
    isClockVisible: true,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.isClockVisible) {
        this.setState({ date: new Date().toLocaleTimeString() });
        // eslint-disable-next-line no-console
        console.log(this.state.date);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setClockName = () => {
    const prevName = this.state.clockName;
    const newName = Math.floor(Math.random() * 100);

    this.setState({
      clockName: newName,
    });
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevName} to ${newName}`);
  }

  hide = () => {
    this.setState({ isClockVisible: true });
  }

  show = () => {
    this.setState({ isClockVisible: false });
  }

  render() {
    return (
      <div className="clock-container">
        <h1 className="title">
          React clock
        </h1>
        <p className="text">
          Current time:
          {' '}
          {this.state.isClockVisible && this.state.date}
        </p>
        <Buttons
          name={this.setClockName}
          hide={this.hide}
          show={this.show}
        />
      </div>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
  clockName: PropTypes.number.isRequired,
};

export default Clock;
