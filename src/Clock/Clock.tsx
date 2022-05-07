import { Component } from 'react';

type Props = {
  name: number;
};

type State = {
  time: string | null;
};

class Clock extends Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({
        time: date.toLocaleTimeString(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      this.state.time
    );
  }
}

export default Clock;
