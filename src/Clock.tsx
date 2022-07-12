import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId = setInterval(() => {
    this.setState({ date: new Date() });

    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.timerId;
  }

  componentDidUpdate(prevProps: Props) {
    const { name: oldName } = prevProps;
    const { name: newName } = this.props;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <strong>{this.props.name}</strong>
        {' time is '}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
