import { Component } from 'react';

type Props = {
  clockName: string;
};

export type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    { clockName: prevClockName }: Readonly<Props>,
    { date: prevDate }: Readonly<State>,
  ) {
    const { clockName } = this.props;
    const { date } = this.state;

    if (prevClockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }

    if (prevDate !== date) {
      // eslint-disable-next-line no-console
      console.info(date.toLocaleTimeString());
    }
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
