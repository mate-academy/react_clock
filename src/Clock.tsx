import React from 'react';

type Props = {
  clockName: string;
};

class Clock extends React.Component<Props> {
  state = {
    time: Date.now(),
  };

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  timeTimerId = 0;

  componentDidMount() {
    this.timeTimerId = window.setInterval(() => {
      const now = Date.now();

      this.setState({ time: now });

      // eslint-disable-next-line no-console
      console.log(new Date(now).toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {new Date(this.state.time).toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export default Clock;
