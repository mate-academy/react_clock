import React from 'react';

import './Clock.scss';

type Props = {
  clockName: string,
};

type State = {
  date: Date,
};

class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount = () => {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      this.setState({ date });
      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  };

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };

  render() {
    return (
      <span className="Clock__time">
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}

export default Clock;
