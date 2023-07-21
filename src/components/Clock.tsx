/* eslint-disable no-console */
import React from 'react';

function getFormattedCurrentDate(): string {
  return new Date().toUTCString().slice(-12, -4);
}

type Props = {
  name: string,
};
type State = {
  today: string,
};

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    today: getFormattedCurrentDate(),
  };

  todayUpdateTimerId = 0;

  componentDidMount(): void {
    this.todayUpdateTimerId = window.setInterval(() => {
      this.setState({ today: getFormattedCurrentDate() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    if (this.props.name !== prevProps.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (this.state.today !== prevState.today) {
      console.info(this.state.today);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.todayUpdateTimerId);
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today}
        </span>
      </div>
    );
  }
}
