import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { clockName } = this.props;

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
