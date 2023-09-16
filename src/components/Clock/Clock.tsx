import React from 'react';

function avoidTimezoneIssues(value: Date) {
  return value.toUTCString().slice(-12, -4);
}

type Props = {
  name: string,
};

type State = {
  currentDate: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentDate: avoidTimezoneIssues(new Date()),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      this.setState({ currentDate: avoidTimezoneIssues(new Date()) });
      // eslint-disable-next-line no-console
      console.info(this.state.currentDate);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name } = prevProps;
    const { name: clockName } = this.props;

    if (clockName !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${name} to ${clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  render() {
    const { name } = this.props;

    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentDate}
        </span>
      </div>
    );
  }
}
