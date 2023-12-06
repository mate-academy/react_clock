import React from 'react';

interface ClockProps {
  name: string;
}

class Clock extends React.Component<ClockProps> {
  timerID: number | null = null;

  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerID
    = window.setInterval(() => this.tick(), 1000) as unknown as number;
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    const { name } = prevProps;

    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerID !== null) {
      clearInterval(this.timerID);
    }
  }

  tick = () => {
    const newTime = new Date().toUTCString().slice(-12, -4);

    this.setState({
      time: newTime,
    });

    // eslint-disable-next-line no-console
    console.info(newTime);
  };

  render() {
    return (
      <div className="Clock">
        <div className="Clock__name">{this.props.name}</div>
        time is
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

export default Clock;
