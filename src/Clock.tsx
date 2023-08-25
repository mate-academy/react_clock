import React from 'react';

type Props = {
  clockName: string;
  hasClock: boolean;
};

type State = {
  date: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.updateTime();
      /* eslint-disable no-console */
      console.info(this.state.date.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(lastName: Props) {
    if (lastName.clockName !== this.props.clockName) {
      /* eslint-disable no-console */
      console.debug(
        `Renamed from ${lastName.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  updateTime() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.date.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
