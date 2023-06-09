/* eslint-disable no-console */
import { Component } from 'react';

interface Props {
  name: string;
}

interface State {
  today: Date;
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timeUpdate = 0;

  componentDidMount(): void {
    this.timeUpdate = window.setInterval(() => {
      const newDate = new Date();

      this.setState({ today: newDate });
      console.info(this.formatTime(newDate));
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { name } = this.props;
    const { name: prevClockName } = prevProps;

    const isClockNameChanged = name !== prevClockName;

    if (isClockNameChanged) {
      console.debug(`Renamed from ${prevClockName} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeUpdate);
  }

  formatTime = (date: Date) => (
    date.toUTCString().slice(-12, -4)
  );

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.formatTime(today)}
        </span>
      </div>
    );
  }
}
