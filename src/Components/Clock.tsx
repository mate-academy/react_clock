import React from 'react';
import './Clock.scss';

type Props = {
  clockName: number,
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: string = new Date().toLocaleTimeString();

      this.setState({ time: date });

      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevClockName: Props) {
    if (prevClockName.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(` renamed from ${prevClockName.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
      // eslint-disable-next-line
      console.log(`Stop clock #${this.props.clockName}`)
    }
  }

  render() {
    const { time } = this.state;

    return (
      <p className="clock" data-cy="time">
        {time}
      </p>
    );
  }
}
