import React from 'react';
import { getRandomName } from '../services/RandomName';

type State = {
  today: Date,
  startName: string;
  endName: string,
  timerIdForClock: number,
  timerIdForName: number,
};

export class Clock extends React.PureComponent<{}, State> {
  state: State = {
    today: new Date(),
    startName: '',
    endName: 'Clock-0',
    timerIdForClock: 0,
    timerIdForName: 0,
  };

  componentDidMount(): void {
    this.state.timerIdForClock = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);

    this.state.timerIdForName = window.setInterval(() => {
      this.setState(prevState => ({ startName: prevState.endName }));
      this.setState({ endName: getRandomName() });

      // eslint-disable-next-line no-console
      console.info(`Renamed from ${this.state.startName} to ${this.state.endName}`);
    }, 3300);

    // eslint-disable-next-line no-console
    console.info('ShowClock');
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerIdForClock);
    window.clearInterval(this.state.timerIdForName);
    // eslint-disable-next-line no-console
    console.info('HideClock');
  }

  render() {
    const { today, endName } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {endName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
