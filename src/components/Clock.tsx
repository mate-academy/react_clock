import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      //eslint-disable-next-line no-console
      console.log(time);

      this.setState({ time: time });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      //eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}

export default Clock;
