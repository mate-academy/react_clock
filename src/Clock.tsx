import React from 'react';

const getTime = () => {
  return new Date().toUTCString().slice(-12, -4);
};

type Props = {
  clockName: string;
};

type State = {
  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  timerId = 0;

  state: Readonly<State> = {
    currentTime: getTime(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: getTime() });

      // eslint-disable-next-line no-console
      console.log(getTime());
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName != this.props.clockName) {
      // eslint-disable-next-line no-console
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

        <span className="Clock__time">{this.state.currentTime}</span>
      </div>
    );
  }
}
