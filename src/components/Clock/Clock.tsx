import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  intervalId = 0;

  componentDidMount(): void {
    this.setState({ date: new Date() });

    this.intervalId = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });
      // eslint-disable-next-line no-console
      console.info(this.getOnlyTime(newDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const prevName = prevProps.name;
    const currentName = this.props.name;

    if (currentName !== prevName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  getOnlyTime = (date: Date) => date.toUTCString().slice(-12, -4);

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getOnlyTime(date)}
        </span>
      </div>
    );
  }
}
