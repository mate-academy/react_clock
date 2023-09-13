import React from 'react';

function avoidTimezoneIssues(value: Date) {
  return value.toUTCString().slice(-12, -4);
}

type Props = {
  name: string,
};

type State = {
  today: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: avoidTimezoneIssues(new Date()),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      this.setState({ today: avoidTimezoneIssues(new Date()) });
      // eslint-disable-next-line no-console
      console.info(this.state.today);
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

    // this.setState({ clockName: this.props.name });

    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
