import React from 'react';
import { getDate } from '../services/GetDate';

type State = {
  today: string,
};

export class Clock extends React.PureComponent<{}, State> {
  state: State = {
    today: getDate(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: getDate() });
      // eslint-disable-next-line no-console
      console.info(`${this.state.today}`);
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;

    return (
      <span className="Clock__time">
        {today}
      </span>
    );
  }
}
