import React from 'react';
import { getCurrentTime } from './helpers';

interface Props {
  clockName:string;
}

interface State {
  time: string;
  clockTimerId: number;
}

export class Clock extends React.PureComponent<Props, State> {
  state: State = {
    time: getCurrentTime(),
    clockTimerId: 0,
  };

  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      this.setState({ time: getCurrentTime() });
      // eslint-disable-next-line no-console
      console.info(this.state.time);
    }, 1000);

    this.setState({ clockTimerId: timerId });
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.clockTimerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
