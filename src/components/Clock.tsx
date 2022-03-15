/* eslint-disable no-console */
import React from 'react';

export class Clock extends React.Component<Props, State> {
  state = {
    timer: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ timer: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }

    console.log(this.state.timer);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
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
