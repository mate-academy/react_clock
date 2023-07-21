/* eslint-disable no-console */
import { PureComponent } from 'react';

function getTime(date: Date): string {
  return date.toUTCString().slice(-12, -4);
}

type Props = {
  clockName: string;
};

type State = {
  today: string;
};

export class Clock extends PureComponent<Props, State> {
  state:State = {
    today: getTime(new Date()),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: getTime(new Date()),
      });

      const { today } = this.state;

      console.info(today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { clockName: prevClockName } = prevProps;
    const { clockName } = this.props;

    if (prevClockName !== clockName) {
      console.debug(
        `Renamed from ${prevClockName} to ${clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
