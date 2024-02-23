import { PureComponent } from 'react';

type Props = {
  hasClock: boolean;
  clockName: string;
  today: Date;
};

export class Clock extends PureComponent<Props> {
  handleClock = window.setInterval(() => {
    this.setState(curState => ({
      ...curState,
      // eslint-disable-next-line react/no-unused-state
      today: new Date(),
    }));
    // eslint-disable-next-line no-console
    console.log(this.props.today.toUTCString().slice(-12, -4));
  }, 1000);

  componentWillUnmount(): void {
    window.clearInterval(this.handleClock);
  }

  render() {
    const { hasClock, clockName, today } = this.props;

    return (
      <>
        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>

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
