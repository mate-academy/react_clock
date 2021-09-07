import React from 'react';

type Props = {
  name: number,
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timer = setInterval(() => {
    const { time } = this.state;

    this.setState({ time: new Date() });
    // eslint-disable-next-line
    console.log(time.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;

    return (
      <p className="clock">
        Current time:
        {' '}
        <span className="clock__figures">{time.toLocaleTimeString()}</span>
      </p>
    );
  }
}
