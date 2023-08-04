import React from 'react';

type Props = {
  clockName: string,
  clockdate: Date,
};

export class Clock extends React.PureComponent<Props> {
  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.props.clockdate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
