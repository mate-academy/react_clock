import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};
export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timer = 0;

  componentDidMount() {
    this.timer = window.setInterval(this.seconds, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  seconds = () => {
    this.setState({ today: new Date() });
    // eslint-disable-next-line
    console.info(this.state.today.toUTCString().slice(-12, -4));
  };

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
