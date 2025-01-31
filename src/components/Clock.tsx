import React from 'react';

interface State {
  time: string;
}

interface Props {
  clockName: string;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  timerId2 = 0;

  changeTime = () => {
    this.setState({ time: new Date().toUTCString().slice(-12, -4) });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(this.changeTime, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }

    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
