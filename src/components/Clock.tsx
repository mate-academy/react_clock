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
      console.log(date.toLocaleTimeString());
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
      <div className="Clock">
        <span className="Clock__name">
          {this.props.clockName}
        </span>

        <span className="Clock__time">
          {this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}

export default Clock;
