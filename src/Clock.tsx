/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: string,
};

type State = {
  currentTime: string,
};

const getUTCTime = () => new Date().toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: getUTCTime(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: getUTCTime() });
      console.info(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { name } = this.props;

    const { currentTime } = this.state;

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
