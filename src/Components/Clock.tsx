import React from 'react';

type Props = {
  setHasClock: (hasClockProps: boolean) => void;
  clockName: string;
};

type State = {
  time: Date;
};

function timeActualy(time: Date): string {
  return time.toUTCString().slice(-12, -4);
}

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date(),
  };

  timerTime = 0;

  componentDidMount() {
    window.addEventListener('contextmenu', this.handleContextMenu);
    window.removeEventListener('click', this.handleClick);

    this.timerTime = window.setInterval(() => {
      const newTime = new Date();

      // eslint-disable-next-line no-console
      console.info(timeActualy(newTime));
      this.setState({ time: newTime });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    window.addEventListener('click', this.handleClick);
    window.removeEventListener('contextmenu', this.handleContextMenu);

    clearInterval(this.timerTime);
  }

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.props.setHasClock(false);
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.props.setHasClock(true);
  };

  render(): React.ReactNode {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {timeActualy(time)}
        </span>
      </div>
    );
  }
}
