import { Component } from 'react';

type Props = {
  name: string,
};

type State = {
  date: Date;
};

export class Clock extends Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerIdOne = 0;

  componentDidMount() {
    this.timerIdOne = window.setInterval(() => {
      this.setState({ date: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = prevProps;

    if (name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdOne);
  }

  render() {
    const { name } = this.props;
    const { date } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
