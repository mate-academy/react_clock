import { Component } from 'react';

type Props = {
  clockName: string,
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });

      // eslint-disable-next-line no-console
      console.info(newDate.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(
    { clockName: prevClockName }: Readonly<Props>,
  ) {
    const { clockName } = this.props;

    if (prevClockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timer);
  }

  render() {
    const { clockName } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
