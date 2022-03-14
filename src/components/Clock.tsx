import { Component } from 'react';

type Props = {
  name?: number,
};

type State = {
  time: string,
};

class Clock extends Component<Props, State> {
  state = {
    time: '',
  };

  timerId: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timerId = this.createInterval();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  createInterval(): NodeJS.Timeout {
    return setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  render() {
    const { name } = this.props;

    return (
      <p>
        {!!name && (
          <span style={{ display: 'block', marginBottom: 10 }}>
            Clock name -
            {' '}
            {name}
          </span>
        )}

        Current time:
        {' '}
        {this.state.time}
      </p>
    );
  }
}

export default Clock;
