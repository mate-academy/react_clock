import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
  };

  todayId = 0;

  // This code starts a timer
  componentDidMount(): void {
    this.todayId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.todayId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
