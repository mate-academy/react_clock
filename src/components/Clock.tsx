import React from 'react';

interface Props {
  clockName: number;
}

interface State {
  time: Date;
}

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(this.runClock, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.clockName;
    const newName = this.props.clockName;

    if (oldName !== newName) {
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  runClock = () => {
    this.setState({ time: new Date() });
    console.log(this.state.time.toLocaleString());
  };

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.time.toLocaleTimeString()}
      </p>
    );
  }
}

export default Clock;
