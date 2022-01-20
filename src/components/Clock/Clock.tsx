import React from 'react';

interface State {
  time: Date;
}

interface Props {
  clockName: number;
}

export class Clock extends React.Component<Props, State > {
  timerId?: NodeJS.Timer;

  state: State = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
      // eslint-disable-next-line no-console
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(previousProps: Props) {
    const [oldName, newName] = [previousProps.clockName, this.props.clockName];

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

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
