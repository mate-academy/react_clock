import React from 'react';

type State = {
  currentTime: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
      // eslint-disable-next-line
      console.info(this.state.currentTime.toUTCString().slice(-12, -4));
    }, 1000);
  }
  // eslint-disable-next-line
  componentDidUpdate(prevProps: Props, { }) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>
        <span> time is </span>

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
