import { Component } from 'react';

type Props = {
  clockName: string,
  date: Date,
};
// eslint-disable-next-line react/prefer-stateless-function
export class Clock extends Component<Props, {}> {
  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        time is

        <span className="Clock__time">
          {this.props.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
