import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: new Date().toUTCString(),
  };

  intervalDate = 0;

  componentDidMount() {
    this.intervalDate = window.setInterval(this.showTime, 1000);
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      window.console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalDate);
  }

  showTime = () => {
    const date = new Date().toUTCString();

    window.console.info(date.slice(-12, -4));
    this.setState({ time: new Date().toUTCString() });
  };

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {time.slice(-12, -4)}
        </span>
      </div>
    );
  }
}
