import React from 'react';
/* eslint-disable no-console */

type State = {
  time: Date;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  interval = setInterval(() => {
    this.setState({ time: new Date() });
    console.log(this.state.time.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.interval;
  }

  componentDidUpdate(currentProps: Props) {
    const oldName = currentProps.clockName;

    if (oldName !== this.props.clockName) {
      console.log(`Clock was renamed from ${oldName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { clockName } = this.props;
    const { time } = this.state;

    return (
      <div>
        <p>
          Current time:
          {' '}
          {time.toLocaleTimeString()}
        </p>

        <p>
          {`Name: ${clockName}`}
        </p>
      </div>
    );
  }
}
