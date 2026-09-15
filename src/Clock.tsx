import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timeIntervalId: number | null = null;

  componentDidMount() {
    this.timeIntervalId = window.setInterval(this.updateTime, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timeIntervalId !== null) {
      window.clearInterval(this.timeIntervalId);
    }
  }

  updateTime = () => {
    const time = new Date().toUTCString().slice(-12, -4);

    this.setState({ time });
    // eslint-disable-next-line no-console
    console.log(time);
  };

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
