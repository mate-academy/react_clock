import React from 'react';

type ClockProps = {
  clockName: string;
};

type ClockState = {
  today: string;
  hidden: boolean;
  prevClockName: string | null;
};

export default class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    today: new Date().toUTCString().slice(-12, -4),
    hidden: false,
    prevClockName: null,
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const currentTime = new Date().toUTCString().slice(-12, -4);

      //eslint-disable-next-line no-console
      console.log(currentTime);

      this.setState({ today: currentTime });
    }, 1000);

    window.addEventListener('contextmenu', this.rightClick);
    window.addEventListener('click', this.leftClick);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    window.removeEventListener('contextmenu', this.rightClick);
    window.removeEventListener('click', this.leftClick);
  }

  componentDidUpdate(prevProps: ClockProps) {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
      this.setState({ prevClockName: prevProps.clockName });
    }
  }

  rightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hidden: true });
  };

  leftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hidden: false });
  };

  render() {
    const { clockName } = this.props;
    const { today, hidden } = this.state;

    if (hidden) {
      return null;
    }

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
