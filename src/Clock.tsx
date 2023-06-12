import React from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerUpdate = 0;

  componentDidMount() {
    this.timerUpdate = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-use-before-define, no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      // eslint-disable-next-line no-use-before-define, no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerUpdate);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
