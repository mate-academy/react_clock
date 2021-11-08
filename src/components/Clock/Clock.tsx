import React from 'react';

interface Props {
  clockName: number
}

interface State {
  date: Date
}

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timeout | undefined;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate(previousProps: Props) {
    const [oldClockName, newClockName] = [previousProps.clockName, this.props.clockName];

    if (oldClockName !== newClockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldClockName} to ${newClockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  render() {
    return (
      <p>{`Current time: ${this.state.date.toLocaleTimeString()}`}</p>
    );
  }
}
