import { PureComponent } from 'react';

type Props = {
  hasClock: boolean,
  clockName: string,
  today: Date,
};

export class Clock extends PureComponent<Props> {
  render() {
    const { hasClock, clockName, today } = this.props;

    return (
      <>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </>
    );
  }
}
