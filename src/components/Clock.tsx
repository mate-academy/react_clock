/* eslint-disable no-console */
import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  today: string;
};

function updateDate() {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state = {
    today: updateDate(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        today: updateDate(),
      });

      console.info(this.state.today);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    const { name: prevClockName } = prevProps;
    const { name: currClockName } = this.props;

    if (prevClockName !== currClockName) {
      console.debug(
        `Renamed from ${prevClockName} to ${currClockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today}
        </span>
      </div>
    );
  }
}
