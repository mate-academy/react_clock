import React from 'react';

type ClockProps = {
  name: number | null;
};

type ClockState = {
  time: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId?: NodeJS.Timeout;

  state: ClockState = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    const { time } = this.state;

    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(time);
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
    // eslint-disable-next-line
     console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return <div className="clock">{`Current time: ${this.state.time}`}</div>;
  }
}
