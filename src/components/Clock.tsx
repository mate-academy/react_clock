import { Component } from 'react';

type Props = {
  name: string
};

type State = {
  today: Date
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;

    if (prevProps.name !== name) {
      console.debug(`Renamed from ${prevProps.name} to ${name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
