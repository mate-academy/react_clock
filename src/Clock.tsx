/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line import/no-duplicates
import React from 'react';

type State = {
  date: Date
};

type ClockProps = {
  clockName: string
};

export default class Clock extends React.PureComponent<ClockProps> {
  state: State = {
    date: new Date(),
  };

  timeId = 0;

  componentDidMount(): void {
    this.timeId = window.setInterval(() => {
      this.setState(() => {
        return {
          date: new Date(),
        };
      });
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<ClockProps>): void {
    if (prevProps !== this.props) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
