import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date().toUTCString().slice(-12, -4) }, () =>
        // eslint-disable-next-line no-console
        console.log(this.state.time),
      );
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{time}</span>
      </div>
    );
  }
}
