import { Component } from 'react';
import './App.scss';

type Props = {
  state: {
    clockName: string;
    hasClock: boolean;
  };
};

type State = {
  today: Date;
};

class Clock extends Component<Props> {
  state: State = {
    today: new Date(),
  };

  dateTimerId: number | null = null;

  componentDidMount(): void {
    this.dateTimerId = window.setInterval((): void => {
      this.setState(
        {
          today: new Date(),
        },
        () => {
          if (this.props.state.hasClock) {
            // eslint-disable-next-line no-console
            console.log(this.state.today.toUTCString().slice(-12, -4));
          }
        },
      );
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.dateTimerId) {
      window.clearInterval(this.dateTimerId);
    }
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.state.clockName}</strong>
        {' time is '}
        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export default Clock;
