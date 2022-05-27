import React from 'react';

type Props = {
  isClockVisible: boolean;
  name: string;
};

type State = {
  time: string;
};

class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`)
    }
  }

  componentWillUnmount() {
    if (this.props.isClockVisible) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div>
        <h1>{name}</h1>
        <p data-cy="time">
          Current time:
          {' '}
          {time}
        </p>
      </div>
    );
  }
}

export default Clock;
