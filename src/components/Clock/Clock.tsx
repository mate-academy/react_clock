import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timer = 0;

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
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
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
