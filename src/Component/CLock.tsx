import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  interval = 0;

  componentDidMount(): void {
    this.setState({ date: new Date() });

    this.interval = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });

      /* eslint-disable-next-line */
      console.log(this.getTimeFromDate(newDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const prevName = prevProps.name;
    const currentName = this.props.name;

    if (currentName !== prevName) {
      /* eslint-disable-next-line */
      console.debug(`Renamed from ${prevName} to ${currentName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.interval);
  }

  getTimeFromDate = (date: Date) => {
    return date.toUTCString().slice(-12, -4);
  };

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{this.getTimeFromDate(date)}</span>
      </div>
    );
  }
}
