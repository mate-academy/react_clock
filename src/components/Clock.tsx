import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

function avoidTimezoneIssues(time: Date) {
  return time.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(avoidTimezoneIssues(this.state.today));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        <span> time is </span>

        <span className="Clock__time">
          {avoidTimezoneIssues(this.state.today)}
        </span>
      </div>
    );
  }
}
