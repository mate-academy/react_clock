import React from 'react';

type State = {
  time: Date;
  timerId: NodeJS.Timer | undefined;
};

export class Clock extends React.Component<{}, State> {
  state = {
    time: new Date(),
    timerId: undefined,
  };

  componentDidMount() {
    this.setState({
      timerId: setInterval(
        () => this.tick(),
        1000,
      ),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  tick() {
    // eslint-disable-next-line
    console.log(this.state.time.toLocaleTimeString());

    this.setState({
      time: new Date(),
    });
  }

  render() {
    return this.state.time.toLocaleTimeString();
  }
}
