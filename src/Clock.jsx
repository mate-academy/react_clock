import React from 'react';

import { clockProps } from './propstypes';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setDate();
      // eslint-disable-next-line
      console.log(this.state.date);
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

  render() {
    return (
      <p>
        {`Current time: ${this.state.date}`}
      </p>
    );
  }
}

Clock.propTypes = clockProps;
