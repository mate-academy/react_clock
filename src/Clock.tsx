import React from 'react';

type Props = {
  handleDateChange: () => void,
  handleClockNameChange: () => void,
  handleDateTimerStop: () => void,
  hideClock: (arg0: MouseEvent) => void,
  showClock: () => void,
  today: Date,
  name: string,
};

export class Clock extends React.PureComponent<Props> {
  componentDidMount(): void {
    if (this.props.name === 'Clock-0') {
      this.props.handleClockNameChange();
    }

    this.props.handleDateChange();
    document.addEventListener('contextmenu', this.props.hideClock);
    document.addEventListener('click', this.props.showClock);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    this.props.handleDateTimerStop();
  }

  render() {
    const { today, name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
