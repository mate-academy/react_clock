import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  today:Date;
};

const formatDate = (date: Date) => {
  return date.toUTCString().slice(-12, -4);
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(formatDate(this.state.today));
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
  ): void {
    if (prevProps.clockName === this.props.clockName) {
      return;
    }

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          { formatDate(today)}
        </span>
      </div>
    );
  }
}
