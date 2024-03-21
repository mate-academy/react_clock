import React from 'react';

interface Props {
  clockName: string;
}

type State = {
  currentDate: Date;
};

export class Clock extends React.Component<Props, State> {
  timer = 0;

  state: State = {
    currentDate: new Date(),
  };

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    // eslint-disable-next-line no-console
    console.log(this.state.currentDate.toUTCString().slice(-12, -4));

    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timer);
  }

  render() {
    const { clockName } = this.props;
    const { currentDate } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {currentDate.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
