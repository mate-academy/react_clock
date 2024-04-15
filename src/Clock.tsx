import React from 'react';

interface Props {
  today: Date;
  clockName: string;
}

interface State {
  time: Date;
  name: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class Clock extends React.Component<Props, State> {
  timeTimerID: NodeJS.Timeout | null = null;

  nameTimerID: NodeJS.Timeout | null = null;

  state: State = {
    time: new Date(),
    name: this.props.clockName,
  };

  componentDidMount() {
    if (!this.timeTimerID) {
      this.timeTimerID = setInterval(() => this.tick(), 1000);
    }

    if (!this.nameTimerID) {
      this.nameTimerID = setInterval(() => this.updateClockName(), 3300);
    }
  }

  componentWillUnmount() {
    if (this.timeTimerID) {
      clearInterval(this.timeTimerID);
    }

    if (this.nameTimerID) {
      clearInterval(this.nameTimerID);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  tick() {
    const currentTime = new Date();

    this.setState({
      time: currentTime,
    });
    // eslint-disable-next-line no-console
    console.log(currentTime.toUTCString().slice(-12, -4));
  }

  updateClockName() {
    const newName = getRandomName();

    // eslint-disable-next-line no-console
    console.debug(`Renamed from ${this.state.name} to ${newName}`);

    this.setState({ name: newName });
  }

  render() {
    const { time, name } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
