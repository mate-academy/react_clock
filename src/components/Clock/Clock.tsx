import React from 'react';

type Props = {
  timerStart: () => void;
  timerStop: () => void;
  clockSwitcher: (value: boolean) => void;
  hasClock: boolean;
  currentClockName: string;
};

type State = {
  today: Date
}

export class Clock extends React.Component<Props> {
  state: State = {
    today: new Date(),
  }

  timerId = 0;

  timeChanger = () => {
    this.timerId = window.setInterval(
      () => {
        this.setState(() => this.setState({ today: new Date() }), () => {
          // eslint-disable-next-line no-console
          //console.log(this.state.today.toUTCString().slice(-12, -4));
        },
        );
      }, 1000);
  };

  timerCleaner = () => {
    window.clearInterval(this.timerId);
  }

  rightButtonClick = (event: MouseEvent) => {
    event.preventDefault();
    this.props.clockSwitcher(false);
  };

  leftButtonClick = () => {
    this.props.clockSwitcher(true);
  }

  componentDidMount(): void {
    addEventListener('contextmenu', this.rightButtonClick);
    removeEventListener('click', this.leftButtonClick);
    this.props.timerStart();
    this.timeChanger();
  }

  componentDidUpdate(
    prevProps: Readonly<Props>
  ): void {
    if (prevProps.currentClockName !== this.props.currentClockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.currentClockName} to ${this.props.currentClockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    removeEventListener('contextmenu', this.rightButtonClick);
    addEventListener('click', this.leftButtonClick);
    this.props.timerStop();
    this.timerCleaner();
  }

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
