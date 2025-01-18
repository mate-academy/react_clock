import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export default class Clock extends Component<Props, State> {
  private interval: number | undefined;

  state: State = {
    time: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.interval = window.setInterval(() => {
      const time = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(time);
      this.setState({ time });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' time is '}
        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
