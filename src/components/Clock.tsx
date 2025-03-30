/* eslint-disable no-console */
import * as React from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId: number = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.today !== this.state.today) {
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }

    if (prevProps.clockName !== this.props.clockName) {
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = 0;
    }
  }

  render() {
    return React.createElement(
      'div',
      { className: 'Clock' },
      React.createElement(
        'strong',
        { className: 'Clock__name' },
        this.props.clockName,
      ),
      ' time is ',
      React.createElement(
        'span',
        { className: 'Clock__time' },
        this.state.today.toUTCString().slice(-12, -4),
      ),
    );
  }
}
