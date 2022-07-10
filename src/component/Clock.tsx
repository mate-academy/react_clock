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

      const { date } = this.state;

      window.console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (name !== prevProps.name) {
      window.console.log(
        `previousName-${prevProps.name}, currentName-${name}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <strong>{name}</strong>
        {' time is '}
        {date.toLocaleTimeString()}
      </div>
    );
  }
}
