import React from 'react';

type State = {
  today: Date
};

type Props = {
  clockName: string
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerID = 0;

  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;
    const { clockName: prevClockName } = prevProps;

    if (prevClockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
