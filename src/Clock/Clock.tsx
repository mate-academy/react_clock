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

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({ date: now });
      // eslint-disable-next-line
      console.info(now.toLocaleTimeString());     
    }, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    const { name } = prevProps;

    if (name !== this.props.name) {
      // eslint-disable-next-line
      console.debug(`Renamed from ${name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
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
