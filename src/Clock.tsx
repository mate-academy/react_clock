import { Component } from 'react';

type ClockProps = {
  name: string;
};

export class Clock extends Component<ClockProps> {
  state = {
    today: new Date(),
  };

  timerId?: number;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const messageToday = new Date();

      this.setState({
        today: messageToday,
      });
      // eslint-disable-next-line no-console
      console.log(messageToday.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProp: ClockProps) {
    if (prevProp.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProp.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}