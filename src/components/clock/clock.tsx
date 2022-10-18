import { Component } from 'react';

type ClockState = {
  today: Date,
  timeIs: string,
};

type ClockProps = {
  name: string;
};

export class Clock extends Component <ClockProps, ClockState> {
  state: Readonly<ClockState> = {
    today: new Date(),
    timeIs: 'time is',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });

      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { today, timeIs } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {` ${timeIs} `}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
