import React from 'react';

type ClockState = {
  time: Date,
};

type ClockProps = {
  name: number,
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state = {
    time: new Date(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 1000);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <>
        <p>
          {time.toLocaleTimeString()}
        </p>
        <p>
          {`Random number: ${name}`}
        </p>
      </>
    );
  }
}
