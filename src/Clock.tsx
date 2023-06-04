import { Component } from 'react';

type Props = {
  today: Date,
  clockName: string,
};

export class Clock extends Component<Props> {
  time = 0;

  componentDidMount() {
    this.time = window.setInterval(() => {
      const { today } = this.props;

      // eslint-disable-next-line no-console
      console.info(today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.time);
  }

  render() {
    const { today, clockName } = this.props;

    return (
      <>
        <div className="Clock">
          <strong className="Clock__name">
            {clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </>
    );
  }
}
