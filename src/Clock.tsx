import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string;
};

const setTime = () => (
  new Date()
    .toUTCString()
    .slice(-12, -4)
);

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: setTime(),
  };

  interval: NodeJS.Timer | undefined;

  componentDidMount() {
    this.interval = setInterval(() => (
      this.setState({ time: setTime() })
    ), 1000);
  }

  componentDidUpdate(prevProps: Props) {
    // eslint-disable-next-line no-console
    console.info(this.state.time);
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time}
        </span>
      </div>
    );
  }
}
