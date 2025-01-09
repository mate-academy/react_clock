import React from 'react';

type Props = {
  name: string;
};

type State = {
  time: Date;
};

const formatTime = (time: Date): string => {
  return time.toUTCString().slice(-12, -4);
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date();

      // eslint-disable-next-line no-console
      console.log(formatTime(currentTime));

      this.setState({ time: currentTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{formatTime(time)}</span>
      </div>
    );
  }
}
