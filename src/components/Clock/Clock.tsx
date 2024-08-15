import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

const toCurrentTimeZone = (time: Date) => time.toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerIdDate = 0;

  componentDidMount() {
    this.timerIdDate = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerIdDate);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    this.handleNameUptade(prevProps);
    this.handleTodayUptade(prevState);
  }

  handleNameUptade = (prevProps: Props) => {
    const prevName = prevProps.name;
    const name = this.props.name;

    if (prevName !== name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevName} to ${name}`);
    }
  };

  handleTodayUptade = (prevState: State) => {
    const prevToday = toCurrentTimeZone(prevState.today);
    const today = toCurrentTimeZone(this.state.today);

    if (prevToday !== today) {
      // eslint-disable-next-line no-console
      console.log(today);
    }
  };

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{toCurrentTimeZone(today)}</span>
      </div>
    );
  }
}
