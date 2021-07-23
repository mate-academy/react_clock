import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import './clock.scss';

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    clockName: this.props.clockName,
  }

  componentDidMount() {
    this.setState({ isClockVisible: true });
    this.timer = setInterval(() => {
      if (this.props.isClockVisible) {
        this.setState({ date: new Date().toLocaleTimeString() });
        console.log(this.state.date);
      }
    }, 1000);
  }

  name = () => {
    const oldName = this.state.clockName;
    const newName = Math.floor(Math.random() * 100);

    this.setState({
      clockName: newName,
    });
    console.log(`The Clock was renamed from ${oldName} to ${newName}`);
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
        <Button
          name={this.name}
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
