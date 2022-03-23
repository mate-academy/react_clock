/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: number
};

class Clock extends React.Component<Props> {
  state = {
    timer: '',
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({ timer: date.toLocaleTimeString() });

      console.log(this.state.timer);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return <>{this.state.timer}</>;
  }
}

export default Clock;
