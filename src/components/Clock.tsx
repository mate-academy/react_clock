import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  clockTimerId = 0;

  componentDidMount(): void {
    this.clockTimerId = window.setInterval(() => {
      const today = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(today);
      this.setState({ today });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockTimerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
