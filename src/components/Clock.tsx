import React from 'react';

interface IProps {
  time: Date;
  clockName: string;
}

export class Clock extends React.Component<IProps> {
  componentDidUpdate(prevProps: IProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.props.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
