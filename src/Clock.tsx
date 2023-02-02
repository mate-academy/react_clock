/* eslint-disable no-console */
import React from 'react';

type State = {
  today : Date,
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerIdToday = 0;

  componentDidMount() {
    this.timerIdToday = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const { name } = this.props;
    const text = `Renamed from ${prevProps.name} to ${name}`;

    if (name !== prevProps.name) {
      console.debug(text);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerIdToday);
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {name}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
