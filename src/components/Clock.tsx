import React from 'react';

type Props = {
  clockName: string;
};

export class Clock extends React.PureComponent<Props> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });

      // eslint-disable-next-line no-console
      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
