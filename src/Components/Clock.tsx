import { Component } from 'react';

type Props = {
  name: string;
};
type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());

      this.setState({ date });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name: prevName } = prevProps;
    const { name: newName } = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(): React.ReactNode {
    return (
      <span data-cy="time">
        {this.state.date.toLocaleTimeString()}
      </span>
    );
  }
}
