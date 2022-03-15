/* eslint-disable no-console */
import React from 'react';

export class Clock extends React.Component<Props, State> {
  state = {
    timer: new Date(),
  };

  timerId:NodeJS.Timeout = setInterval(() => {}, 1000);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ timer: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps:Props) {
    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }

    console.log(this.state.timer);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        {`${this.state.timer.toLocaleTimeString()}`}
      </div>
    );
  }
}

type Props = {
  name: number
};
type State = {
  timer: Date
};
