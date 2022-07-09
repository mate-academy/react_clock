import { Component } from 'react';

type State = {
  date: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(
        `previousName-${prevProps.name}, currentName-${this.props.name}`,
      );
    }

    if (this.state.date !== prevState.date) {
      // eslint-disable-next-line no-console
      console.log(this.state.date, prevState.date);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <div className="clock">
        <strong>{this.props.name}</strong>
        {' time is '}
        {date.toLocaleTimeString()}
      </div>
    );
  }
}
