import React from 'react';
type Props = {
  clockName: string;
};
type State = {
  today: string;
};
export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
  };
  timerId = 0;
  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      /* // eslint-disable-next-line no-console
      console.log(this.state.today); */
    }, 1000);
  }
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today);
    }
  }
  componentWilUnmount(): void {
    window.clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
