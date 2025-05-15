import React from 'react';

type Props = {
  clockName: string;
  hasClock: boolean;
};

type State = {
  name: string;
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    name: 'Clock',
    time: new Date(),
  };

  timerId: number | null = null;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevState.time !== this.state.time && this.props.hasClock) {
      const timeFormatter = new Intl.DateTimeFormat('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
      });

      const formattedTime = timeFormatter.format(this.state.time);

      // eslint-disable-next-line no-console
      console.log(formattedTime);
    }

    if (prevProps.clockName !== this.props.clockName && this.props.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {new Intl.DateTimeFormat('uk-UA', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'UTC',
          }).format(time)}
        </span>
      </div>
    );
  }
}
