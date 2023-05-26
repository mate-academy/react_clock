import React from 'react';

type ClockProps = {};

type ClockState = {
  hasClock: boolean;
  clockName: string;
  currentTime: string;
};

export class Clock extends React.Component<ClockProps, ClockState> {
  RANDOMNAME_INTERVAL = 3300;

  timerId = 0;

  state: ClockState = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: new Date().toUTCString().slice(-12, -4),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      const clockName = this.getRandomName();

      this.setState({
        clockName,
      });
    }, this.RANDOMNAME_INTERVAL);

    setInterval(() => {
      if (this.state.hasClock) {
        const currentTime = new Date().toUTCString().slice(-12, -4);

        // eslint-disable-next-line no-console
        console.info(currentTime);
        this.setState({ currentTime });
      }
    }, 1000);

    document.addEventListener('click', this.clickListener);
    document.addEventListener('contextmenu', this.contextMenuListener);
  }

  componentDidUpdate(_: Readonly<ClockProps>, prevState: Readonly<ClockState>) {
    const { hasClock, clockName } = this.state;

    if (prevState.hasClock && hasClock && prevState.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('click', this.clickListener);
    document.removeEventListener('contextmenu', this.contextMenuListener);
  }

  getRandomName = () => {
    const min = 1000;
    const max = 9999;

    return `Clock-${Math.floor(Math.random() * (max - min + 1)) + min}`;
  };

  contextMenuListener = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  clickListener = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { hasClock, clockName, currentTime } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{clockName}</strong>
            <span className="Clock_name_separator"> time is </span>
            <span className="Clock__time">{currentTime}</span>
          </div>
        )}
      </div>
    );
  }
}
