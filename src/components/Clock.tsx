/* eslint-disable no-console */
import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {
  clockName: string;
  hasClock: boolean;
  timerID: number;
};

export default class Clock extends React.Component<Props, {}> {
  state = {
    clockName: this.props.clockName,
    today: new Date(),
    hasClock: this.props.hasClock,
    timerID: this.props.timerID,
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.state.timerID = window.setInterval(
      () => this.tick(),
      1000,
    );
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // not to show the context menu
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate = (_prevProps: Props, prevState: Props) => {
    if (prevState.clockName !== this.state.clockName
      && this.state.hasClock === true) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  };

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  tick() {
    this.setState({
      today: new Date(),
    });
    if (this.state.hasClock === true) {
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  render() {
    const { hasClock, today, clockName } = this.state;

    return (
      <div className={`${hasClock === true ? 'Clock' : 'ClockHide'}`}>
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
