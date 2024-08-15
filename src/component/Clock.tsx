import React from 'react';
import './Clock.scss';

// getCurrentTime = (date: Date) => {
//   return date.toUTCString().slice(-12, -4);
// };

type Props = {
  clockName: string;
};

type State = {
  currentTime: Date;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void {
    if (
      prevState.currentTime.toUTCString().slice(-12, -4) !==
      this.state.currentTime.toUTCString().slice(-12, -4)
    ) {
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime.toUTCString().slice(-12, -4));
    }

    if (_prevProps.clockName !== this.props.clockName) {
      //eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${_prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.currentTime.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
