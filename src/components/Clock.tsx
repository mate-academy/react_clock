import React from 'react';

type ClockProps = {
  name: string;
};

type ClockState = {
  today: Date;
};

export class Clock extends React.PureComponent<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date(),
  };

  timerDate = 0;

  componentDidMount(): void {
    this.timerDate = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerDate);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

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
