import React from 'react';

type Props = {};

interface State {
  date: Date;
  timerId: ReturnType<typeof setInterval>;
}

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    return (
      <p>
        {`Current time: ${this.state.date.toLocaleTimeString()}`}
      </p>
    );
  }
}
