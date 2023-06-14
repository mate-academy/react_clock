import { Component } from 'react';

type State = {
  today: Date,
};

type Props = {
  clockName: string;
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  intervalId = 0;

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  startTimer() {
    this.intervalId = window.setInterval(() => {
      this.setState({
        today: new Date(),
      });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">
          {this.props.clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
