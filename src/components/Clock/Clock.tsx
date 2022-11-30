import { Component } from 'react';

type State = {
  today: Date
};

type Props = {
  clockName: string
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerIdClock = 0;

  componentDidMount(): void {
    this.timerIdClock = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.formatDate());
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerIdClock);
  }

  formatDate() {
    return this.state.today.toUTCString().slice(-12, -4);
  }

  render() {
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.formatDate()}
        </span>
      </div>
    );
  }
}
