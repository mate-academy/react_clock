import React from 'react';
import { getCurrentTime } from './services/functions';

type Props = {
  name: string;
};

type State = {

  currentTime: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: getCurrentTime(),
  };

  timerValue = 0;

  componentDidMount(): void {
    this.timerValue = window.setInterval(() => {
      this.setState({ currentTime: getCurrentTime() });

      // eslint-disable-next-line no-console
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerValue);
  }

  render() {
    const { currentTime } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {currentTime}
        </span>
      </div>
    );
  }
}
