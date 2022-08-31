import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: string,
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  timerId = window.setInterval(() => {
    this.setState({ date: new Date().toLocaleTimeString() });
  }, 1000);

  componentDidMount() {
    return this.timerId;
  }

  componentDidUpdate(prevProps: Props) {
    const { name: prevValue } = prevProps;
    const { name: newValue } = this.props;

    if (prevValue !== newValue) {
      // eslint-disable-next-line no-console
      console.log(`Renamed from ${prevValue} to ${newValue}`);
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
