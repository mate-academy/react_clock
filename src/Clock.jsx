import React from 'react';
import { ButtonsControl } from './ButtonsControl';

import { clockProps } from './propstypes';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    isClockVisible: true,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isClockVisible) {
        this.setDate();
        // eslint-disable-next-line
        console.log(this.state.date);
      }
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setDate = () => {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  changeClockVisability = () => {
    if (this.state.isClockVisible) {
      this.setState({ isClockVisible: false });
    } else {
      this.setState({ isClockVisible: true });
    }
  }

  getRandomClockName = () => {
    this.props.app.setState({ clockName: Math.floor(Math.random() * 1000) });
  }

  render() {
    return (
      <>
        {this.state.isClockVisible && (
          <p>
            {`Current time: ${this.state.date}`}
          </p>
        )}
        <ButtonsControl
          visible={this.changeClockVisability}
          random={this.getRandomClockName}
        />
      </>
    );
  }
}

Clock.propTypes = clockProps;
