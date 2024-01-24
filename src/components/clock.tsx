import React from 'react';

type Props = {
  clockName: string
};

type State = {
  currentTime: string
};

function getDate(): string {
  const value = new Date().toUTCString().slice(-12, -4);

  return value;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  clockId = 0;

  componentDidMount(): void {
    this.clockId = window.setInterval(() => {
      this.setState({ currentTime: getDate() });
      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockId);
  }

  render(): React.ReactNode {
    const { clockName } = this.props;
    const { currentTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
