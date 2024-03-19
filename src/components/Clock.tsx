import React from 'react';
import '../App.scss';

type Props = {
  dayProps: string;
};

type State = {
  dayState: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    dayState: new Date(),
  };

  todayId = 0;

  componentDidMount(): void {
    this.todayId = window.setInterval(() => {
      this.setState({ dayState: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (this.props.dayProps !== prevProps.dayProps) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.dayProps} to ${this.props.dayProps}`,
      );
    }

    if (this.state.dayState !== prevState.dayState) {
      // eslint-disable-next-line no-console
      console.log(this.state.dayState.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    if (this.todayId) {
      window.clearInterval(this.todayId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.dayProps}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.dayState.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
