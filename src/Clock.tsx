import React from 'react';
import './App.scss';

type State = {
  today: Date;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const today = new Date();

      this.setState({ today });

      // eslint-disable-next-line no-console
      console.info(today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: currentClockName } = this.props;
    const { name: prevClockName } = prevProps;

    if (currentClockName !== prevClockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevClockName} to ${currentClockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { name: clockname } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockname}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
