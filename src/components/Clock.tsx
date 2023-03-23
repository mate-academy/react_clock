import React from 'react';

type Props = {
  clockName: string,
};

type State = {
  time: Date,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      const newD = new Date();

      this.setState({ time: newD });
      // eslint-disable-next-line no-console
      console.info(newD.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { clockName } = this.props;

    if (clockName !== prevProps.clockName) {
      window.console.debug(`Renamed from ${prevProps.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const timeString = this.state.time.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {`${this.props.clockName}`}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeString}
        </span>
      </div>
    );
  }
}
