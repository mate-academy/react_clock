import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  currentTime: string;
};

function getNewDate() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: getNewDate(),
  };

  timerId = 0;

  value = new Date().toString().slice(-12, -4);

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: getNewDate() });
      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps:Props): void {
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

  render(): React.ReactNode {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{currentTime}</span>
      </div>
    );
  }
}
