import React from 'react';

type State = {
  today: Date;
  clockName: string;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
    clockName: this.props.name,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(
      () => this.setState({ today: new Date() }),
      1000,
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevProps.name !== this.props.name) {
      this.setState({ clockName: this.props.name });

      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.props.name}`,
      );
    }

    // eslint-disable-next-line no-console
    console.log(this.state.today.toUTCString().slice(-12, -4));
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
