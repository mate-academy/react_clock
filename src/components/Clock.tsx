import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props> {
  timerIdTime?: number;

  componentDidMount() {
    this.timerIdTime = window.setInterval(() => {
      const now = new Date();

      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
      this.forceUpdate();
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      const oldName = prevProps.clockName;
      const newName = this.props.clockName;

      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdTime);
  }

  render() {
    const today = new Date();
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
