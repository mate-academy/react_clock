import React from 'react';

type State = {
  today: Date;
  clockName: string;
};

type Props = {
  getRandomName: () => string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
  };

  timerId: number | undefined = undefined;

  clockTimerId: number | undefined = undefined;

  componentDidMount(): void {
    this.clockTimerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));

      this.setState({ today: new Date() });
    }, 1000);
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.props.getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.clockTimerId);
  }

  render() {
    const { clockName, today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
