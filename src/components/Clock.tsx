import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  today: Date;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date(),
  };

  private timerIdDate = 0;

  componentDidMount(): void {
    this.timerIdDate = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: ClockProps): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    clearInterval(this.timerIdDate);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

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
