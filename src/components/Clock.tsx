import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  now: Date;
};
export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    now: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (
      prevState.now.toUTCString().slice(-12, -4) !==
      this.state.now.toUTCString().slice(-12, -4)
    ) {
      // eslint-disable-next-line no-console
      console.log(this.state.now.toUTCString().slice(-12, -4));
    }

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
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

        <span className="Clock__time">
          {this.state.now.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
