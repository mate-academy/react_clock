import { Component } from 'react';

type ClockProps = {
  clockName: string;
};

type ClockStates = {
  today: Date;
};

export class Clock extends Component<ClockProps, ClockStates> {
  state = {
    today: new Date(),
  };

  interval = 0;

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({ today: new Date() });

      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProp: ClockProps) {
    if (prevProp.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProp.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>
        <span> time is </span>
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
