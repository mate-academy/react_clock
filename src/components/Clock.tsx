import React from 'react';

type Props = {
  name: string;
  currentTime: Date;
};

export class Clock extends React.Component<Props> {
  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.currentTime !== prevProps.currentTime) {
      // eslint-disable-next-line no-console
      console.log(this.props.currentTime.toUTCString().slice(-12, -4));
    }

    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name, currentTime } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
