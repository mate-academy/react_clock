import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export class Clock extends React.Component {
  state = {
    clockName: this.props.clockName,
    time: new Date().toLocaleTimeString,
    isClockVisible: this.props.isClockVisible,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isClockVisible) {
        this.setState({ time: new Date().toLocaleTimeString() });
        // eslint-disable-next-line no-console
        console.log(this.state.time);
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from
        ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
          <span>
            {this.state.isClockVisible && this.state.time}
          </span>
        </p>
        <Button
          nameButton="Show clock"
          action={
            () => this.setState({
              isClockVisible: true,
            })
          }
        />
        <Button
          nameButton="Hide clock"
          action={
            () => this.setState({
              isClockVisible: false,
            })
          }
        />
        <Button
          nameButton="Set random name"
          action={
            () => this.setState({
              clockName: Math.floor(Math.random() * 100),
            })
          }
        />
      </>
    );
  }
}

Clock.propTypes = {
  isClockVisible: PropTypes.bool.isRequired,
  clockName: PropTypes.number.isRequired,
};
