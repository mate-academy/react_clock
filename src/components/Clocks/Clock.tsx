/* eslint-disable no-console */
import React from 'react';
import './Clock.scss';

type State = {
  today: Date,
};

type Props = {
  clockName: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerUpdate = 0;

  componentDidMount() {
    this.timerUpdate = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { clockName } = this.props;

    if (prevProps.clockName !== clockName) {
      console.debug(
        `Renamed from ${prevProps.clockName} to ${clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerUpdate);
  }

  render() {
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
