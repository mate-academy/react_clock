import React from 'react';

type State = {
  date: string;
};

type Props = {
  clockName: string;
};

function formatDate(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: Readonly<State> = {
    date: formatDate(new Date()),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.updateDate, 1000);
  }

  componentDidUpdate({ clockName: prevClockName }: Readonly<Props>): void {
    const { clockName } = this.props;

    if (prevClockName === clockName) {
      return;
    }

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prevClockName} to ${clockName}`);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  updateDate = () => {
    const newDate = formatDate(new Date());

    this.setState({ date: newDate });
    // eslint-disable-next-line no-console
    console.log(newDate);
  };

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{date}</span>
      </div>
    );
  }
}
