import React from 'react';

type State = {
  today: string;
};

type Props = {
  clockName: string;
};

function getTime(time: Date) {
  return time.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: getTime(new Date()),
  };

  constructor(props: Props) {
    super(props);
    this.getTime = this.getTime.bind(this);
  }

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getTime(new Date()) });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Props): void {
    // eslint-disable-next-line no-console
    console.log(this.state.today);

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  getTime(time: Date) {
    return time.toUTCString().slice(-12, -4);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
