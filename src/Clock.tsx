/* eslint-disable no-console */
import React from 'react';

interface Props {
  clockName: string;
}

interface State {
  today: Date,
}

export default class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() }, () => {
        console.info(this.state.today.toUTCString().slice(-12, -4));
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

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
