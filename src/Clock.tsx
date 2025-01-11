import { Component } from 'react';

type Props = {
  clockName: string;
};

type State = {
  today: string;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId: number = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const date = new Date().toUTCString().slice(-12, -4);

      this.setState({ today: date });
      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.clockName}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.today}</span>
      </div>
    );
  }
}
