import React from 'react';

type State = {
  time: Date;
};

export class Clock extends React.Component<{}, State> {
  state: State = {
    time: new Date(),
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString(), 'Clock ID:', this.timerId);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <span data-cy="time">
        {this.state.time.toLocaleTimeString()}
      </span>
    );
  }
  // eslint-disable-next-line
}
