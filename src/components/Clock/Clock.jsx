import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    clockName: this.props.clockName,
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

  messege = () => {
    const oldName = this.state.clockName;
    const newName = Math.floor(Math.random() * 1000);

    this.setState({
      clockName: newName,
    });
    // eslint-disable-next-line
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
      <>
        <h1>
          React clock
          {' '}
          {this.state.clockName}
        </h1>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
        <Button
          messege={this.messege}
          hide={this.hide}
          show={this.show}
          {...this.state}
        />
      </>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
  clockName: PropTypes.string.isRequired,
};

export default Clock;
