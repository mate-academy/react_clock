import React from 'react';

type Props = {
  clockName: string
};

type State = {
  nowDate: Date;
};

export class Clock extends React.Component<Props, State> {
  static formatTime(date: Date): string {
    return date.toUTCString().slice(-12, -4);
  }

  state: State = {
    nowDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newValue = new Date();

      // eslint-disable-next-line no-console
      console.info(Clock.formatTime(newValue));

      this.setState({ nowDate: newValue });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { nowDate } = this.state;
    const formattedTime = Clock.formatTime(nowDate);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {formattedTime}
        </span>
      </div>
    );
  }
}
