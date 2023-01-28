import { Component } from 'react';
/* eslint-disable no-console */

type State = {
  today: Date,
};

type Props = {
  name: string,
};

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    { name: oldClockName }: Readonly<Props>,
    { today: oldDate }: Readonly<State>,
  ) {
    const { today } = this.state;
    const { name } = this.props;

    if (oldClockName !== name) {
      console.debug(`Renamed from ${oldClockName} to ${name}`);
    }

    if (oldDate !== today) {
      console.info(today.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <div className="Clock__name">
          <strong>{name}</strong>
        </div>

        {' time is '}

        <div className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </div>
      </div>
    );
  }
}
