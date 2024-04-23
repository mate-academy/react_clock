import React from 'react';

type Props = {
  time: Date;
  hasClock: boolean;
  clockName: string;
};

export class Clock extends React.Component<Props> {
  componentDidUpdate(prevProps: Props): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const { hasClock, clockName } = this.props;

    return hasClock ? (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.props.time.toLocaleTimeString()}
        </span>
      </div>
    ) : null;
  }
}
