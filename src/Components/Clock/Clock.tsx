import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

const toCurrentTimeZone = (time: Date) => time.toUTCString().slice(-12, -4);

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount = () => {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  };

  componentWillUnmount = () => {
    window.clearInterval(this.timerId);
  };

  componentDidUpdate = (
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ) => {
    if (
      toCurrentTimeZone(prevState.today) !== toCurrentTimeZone(this.state.today)
    ) {
      // eslint-disable-next-line no-console
      console.log(toCurrentTimeZone(this.state.today));
    }

    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
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
