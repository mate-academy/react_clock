import React from 'react';

interface State {
  currentTime: Date;
}

interface Props {
  clockName: string;
}

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  componentDidMount(): void {
    this.createTimer();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    // eslint-disable-next-line no-console
    console.info(this.getUtcDate());
  }

  componentWillUnmount(): void {
    window.clearInterval(this.createTimer());
  }

  getUtcDate() {
    return this.state.currentTime.toUTCString().slice(-12, -4);
  }

  createTimer = () => (
    window.setInterval(() => (this.setState({ currentTime: new Date() })), 1000)
  );

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getUtcDate()}
        </span>
      </div>
    );
  }
}
