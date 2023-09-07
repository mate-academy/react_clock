import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  state = {
    time: new Date(),
  };

  timeInterval = 0;

  componentDidMount() {
    this.timeInterval = window.setInterval(this.newInfo, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      const oldName = prevProps.clockName;
      const newName = this.props.clockName;

      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timeInterval);
  }

  newInfo = () => {
    this.setState({ time: new Date() });
    // eslint-disable-next-line no-console
    console.info(this.state.time.toUTCString().slice(-12, -4));
  };

  render() {
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        <span>&nbsp;time is&nbsp;</span>

        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
