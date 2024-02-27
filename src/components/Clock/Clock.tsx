import React from 'react';

type State = {
  date: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  intervalId: number = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      const time = new Date();

      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(time.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
