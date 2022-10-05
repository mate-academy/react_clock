import React from 'react';

type Props = {
  hasClock: boolean,
  clockName: string,
};

type State = {
  clockTime: Date,
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    clockTime: new Date(),
  };

  timeInterval = 0;

  componentDidMount(): void {
    this.timeInterval = window.setInterval(() => {
      this.setState({ clockTime: new Date() });

      if (this.props.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.clockTime.toUTCString().slice(-12, -4));
      }
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeInterval);
  }

  render(): React.ReactNode {
    const { clockName } = this.props;
    const { clockTime } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {clockTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
