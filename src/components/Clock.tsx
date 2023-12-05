import { Component } from 'react';

interface ClockProps {
  clockName: string;
}

interface ClockState {
  time: Date;
  timerId: number | null;
}

export class Clock extends Component<ClockProps, ClockState> {
  state: ClockState = {
    time: new Date(),
    timerId: 0,
  };

  componentDidMount() {
    this.setState({
      time: new Date(),
    });

    const timerId = window.setInterval(() => {
      this.setState({
        time: new Date(),
      });
      // eslint-disable-next-line no-console
      console.info(this.state.time.toUTCString().slice(-12, -4));
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    const { timerId } = this.state;

    if (timerId) {
      clearInterval(timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.time.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
