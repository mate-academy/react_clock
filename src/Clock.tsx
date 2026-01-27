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

  timerId = 0;

  setNow = () => {
    const now = new Date();

    this.setState({ today: now });
  };

  updateNow = () => {
    const now = new Date();

    this.setState({ today: now });

    // eslint-disable-next-line no-console
    console.log(now.toUTCString().slice(-12, -4));
  };

  componentDidMount() {
    this.setNow();
    this.timerId = window.setInterval(this.updateNow, 1000);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong> time is{' '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
