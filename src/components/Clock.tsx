import React from 'react';

type ClockState = {
  time: Date;
};
type ClockProps = {
  name: number;
};
export class Clock extends React.Component<ClockProps, ClockState> {
  public clockTimer?: number;

  state: ClockState = {
    time: new Date(),
  };

  componentDidMount() {
    this.clockTimer = window.setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate({ name }: ClockProps) {
    if (name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    const { time } = this.state;

    return (
      <p>
        {`Current time: ${time.toLocaleTimeString()}`}
      </p>
    );
  }
}
