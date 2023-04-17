/* eslint-disable no-console */
import React from 'react';

type Props = {
  clockName: string
};

type State = {
  today: Date
};

export class Clock extends React.Component<Props, State> {
  timerId: number | undefined = undefined;

  state: State = {
    today: new Date(),
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  // eslint-disable-next-line max-len
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void {
    if (prevState.today !== this.state.today) {
      console.info(this.getTime());
    }

    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  getTime = () => (this.state.today.toUTCString().slice(-12, -4));

  render(): React.ReactNode {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getTime()}
        </span>
      </div>
    );
  }
}
