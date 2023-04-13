import React, { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends Component<Props, State> {
  dateTimerId: number | undefined = undefined;

  state: Readonly<State> = {
    today: new Date(),
  };

  componentDidMount(): void {
    this.dateTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.info(this.getTimeFromDate());
    }

    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.dateTimerId);
  }

  getTimeFromDate = () => {
    return this.state.today.toUTCString().slice(-12, -4);
  };

  render(): React.ReactNode {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getTimeFromDate()}
        </span>
      </div>
    );
  }
}
