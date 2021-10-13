import React from 'react';

type Props = {
  isClockVisible: boolean;
  clockName: number;
};

type State = {
  date: Date;
};

export class Timer extends React.Component<Props, State> {
  timerId?: NodeJS.Timeout;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line
      this.props.isClockVisible &&
      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prev: Props) {
    if (prev.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prev.clockName} `
        + `to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { isClockVisible, clockName } = this.props;
    const { date } = this.state;

    return (
      <>
        <p>
          Current time:
          {isClockVisible && date.toLocaleTimeString()}
        </p>
        <p>
          {`Clock name is: ${clockName}`}
        </p>
      </>
    );
  }
}
