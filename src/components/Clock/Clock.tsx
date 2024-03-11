import React from 'react';

type Props = {
  timerStart: () => void;
  timerStop: () => void;
  currentClockName: string;
  count: number;
  appearNameHook: () => void;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
  };

  timerId = 0;


  componentDidMount(): void {
    this.props.timerStart();
    this.timeChanger();
    if (this.props.count === 1) {
      this.props.appearNameHook();
    }
  }

  componentWillUnmount(): void {
    this.props.timerStop();
    this.timerCleaner();
  }

  timeChanger = () => {
    this.timerId = window.setInterval(() => {
      this.setState(
        () => this.setState({ today: new Date() }),
        () => {
          // eslint-disable-next-line no-console
          console.log(this.state.today.toUTCString().slice(-12, -4));
        },
      );
    }, 1000);
  };

  timerCleaner = () => {
    window.clearInterval(this.timerId);
  };

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.currentClockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
