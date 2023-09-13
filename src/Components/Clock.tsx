/* eslint-disable no-console */
import React from 'react';

type State = {
  currentDate: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props> {
  state: State = {
    currentDate: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ currentDate: new Date() });

      console.info(this.getCorrectData(this.state.currentDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getCorrectData = (currentDate: Date) => {
    return currentDate.toUTCString().slice(-12, -4);
  };

  render() {
    const { currentDate } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.getCorrectData(currentDate)}
        </span>
      </div>
    );
  }
}

/* ---test---- */
