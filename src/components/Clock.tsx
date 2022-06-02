import React from 'react';

type State = {
  time: string,
};

export class Clock extends React.Component<{}, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log(this.state.time);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        {this.state.time}
      </>
    );
  }
}
