import React from 'react';

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state = {
    date: new Date(),
  };

  intervalValue = 0;

  componentDidMount(): void {
    this.setState({ date: new Date() });

    this.intervalValue = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ date: newDate });

      // eslint-disable-next-line no-console
      console.log(this.getTimeFromDate(newDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const oldName = prevProps.name;
    const currentName = this.props.name;

    if (currentName !== oldName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${oldName} to ${currentName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalValue);
  }

  getTimeFromDate = (date: Date) => {
    // this code retrun time in not my time zone(in Greenwich)
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
