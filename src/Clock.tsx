import React from 'react';

type Props = {
  clockName: string;
  hasClock: boolean;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => (
      this.updateTime()), 1000);
  }

  componentDidUpdate(): void {
    // eslint-disable-next-line
    console.info(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  updateTime = () => (
    this.setState({ today: new Date() })
  );

  render(): React.ReactNode {
    const { today } = this.state;
    const { clockName } = this.props;

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
