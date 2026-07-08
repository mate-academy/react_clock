import React from 'react';

type ClockState = {
  time: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, ClockState> {
  state: ClockState = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const newTime = new Date().toUTCString().slice(-12, -4);

      this.setState({ time: newTime });

      // eslint-disable-next-line no-console
      console.log(newTime);
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <span className="Clock__name">{name}</span>
        {' time is '}
        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
