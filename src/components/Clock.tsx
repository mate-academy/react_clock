import { PureComponent } from 'react';

type Props = {
  name: string,
  today: Date
};

export class Clock extends PureComponent<Props> {
  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.props.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
