/* eslint-disable no-console */
import React from 'react';

type Props = {
  name: number;
};

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timeUpdater = setInterval(() => {
    this.setState({ time: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timeUpdater;
  }

  componentDidUpdate(prevProps: Props) {
    const time = this.state.time.toLocaleTimeString();

    console.log(time);

    const prevName = prevProps.name;
    const { name } = this.props;

    if (name !== prevName) {
      console.log(`The Clock was renamed from ${prevName} to ${name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeUpdater);
  }

  render() {
    const time = this.state.time.toLocaleTimeString();

    return (
      <div className="clock">
        <h2 className="clock__time">
          Current time:
          {time}
        </h2>
      </div>
    );
  }
}
