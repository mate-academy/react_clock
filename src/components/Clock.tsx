import React from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
  active: boolean;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    today: new Date(),
  };

  timerId: number | undefined;

  componentDidMount() {
    if (this.props.active) {
      this.setState({ today: new Date() });
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.name !== this.props.name) {
      this.forceUpdate();
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (!prevProps.active && this.props.active) {
      this.startTimer();
    } else if (prevProps.active && !this.props.active) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.setState({
      today: new Date(),
    });

    this.timerId = window.setInterval(() => {
      const now = new Date();

      this.setState({
        today: now,
      });

      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  stopTimer() {
    if (this.timerId !== undefined) {
      window.clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  render() {
    const { today } = this.state;
    const { name } = this.props;

    const displayTime = today
      ? today.toUTCString().slice(-12, -4)
      : 'loading...';

    if (!this.props.active) {
      return null;
    }

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">{displayTime}</span>
      </div>
    );
  }
}
