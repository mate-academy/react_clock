import React from 'react';

const CHANGE_TIME_MS = 1000;

function truncateDateToTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

type Props = {
  name: string,
};

type State = {
  today: Date,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  dateTimer = 0;

  componentDidMount(): void {
    this.dateTimer = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });

      // eslint-disable-next-line no-console
      console.info(truncateDateToTime(this.state.today));
    }, CHANGE_TIME_MS);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateTimer);
  }

  render() {
    const { name: clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {truncateDateToTime(today)}
        </span>
      </div>
    );
  }
}
