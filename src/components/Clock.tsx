import React from 'react';

type Props = {};

type State = {
  time: string
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });

      // eslint-disable-next-line
    console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <h2 data-cy="time">
        {this.state.time}
      </h2>
    );
  }
}

export default Clock;
