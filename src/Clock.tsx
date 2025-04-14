import React from 'react';

type Props = {
  name: string;
};
type State = {
  time: Date;
  clockName: string;
};

export default class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    time: new Date(),
    clockName: this.props.name,
  };

  timerIdTime = 0;

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.log(this.state.time.toUTCString().slice(-12, -4));
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
      this.setState({ clockName: this.props.name });
    }
  }

  componentDidMount(): void {
    this.timerIdTime = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdTime);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
