import React from 'react';

type Props = {
  name: string;
  today: Date;
  setDate: (reset: Date) => void;
};

export class Clock extends React.Component<Props> {
  dateIntervalId = 0;

  componentDidMount(): void {
    let newDate = new Date(); // Get current date and time

    // Set initial date and start interval to update time
    this.props.setDate(newDate);

    this.dateIntervalId = window.setInterval(() => {
      newDate = new Date(); // Get new date and time

      this.props.setDate(newDate); // Update date and time

      // eslint-disable-next-line no-console
      console.log(newDate.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      return console.debug(
        `Renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateIntervalId);
  }

  render() {
    const { name, today } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
