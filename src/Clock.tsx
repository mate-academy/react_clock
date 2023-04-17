/* eslint-disable no-console */
import React from 'react';

function getTime(date: Date):string {
  return date.toUTCString().slice(-12, -4);
}

type State = {
  today: Date;
};

type Props = {
  clockName: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerTimeRefreshId = 0;

  componentDidMount() {
    this.timerTimeRefreshId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }

    if (prevState.today !== this.state.today) {
      console.info(getTime(this.state.today));
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerTimeRefreshId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {getTime(this.state.today)}
        </span>
      </div>
    );
  }
}
