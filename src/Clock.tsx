import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: string,
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    date: new Date().toLocaleTimeString(),
  };

  timerId = window.setInterval(() => {
    this.setState({ date: new Date().toLocaleTimeString() });
  }, 1000);

  componentDidMount() {
    return this.timerId;
  }

  componentDidUpdate(prevProps: Props) {
    const { name: prev } = prevProps;
    const { name: next } = this.props;

    if (prev !== next) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prev} to ${next}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong>
          {this.props.name}
        </strong>
        {' time is '}
        <span>
          {this.state.date}
        </span>
      </div>
    );
  }
}
