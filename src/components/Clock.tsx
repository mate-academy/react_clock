import React from 'react';

interface ClockState {
  date: string,
}

interface ClockProps {
  clockName: string;
}

function getDate() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state = { date: getDate() };

  timerID!: number | null;

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);

    // console.info(this.state.date);
  }

  // componentDidUpdate(prevProps: Readonly<ClockProps>): void {
  //   console.debug(prevProps);
  // }

  componentWillUnmount() {
    if (this.timerID) {
      window.clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      date: getDate(),
    });
  }

  render() {
    const { date } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date}
        </span>
      </div>
    );
  }
}
