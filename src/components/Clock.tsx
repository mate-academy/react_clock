import React from 'react';

type Props = {
  name: string;
};

type State = {
  today: Date;
};

export class Clock extends React.Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerIdClock = 0;

  startTimersForClock = () => {
    this.timerIdClock = window.setInterval(() => {
      const updateTime = new Date();

      // eslint-disable-next-line no-console
      console.log(updateTime.toUTCString().slice(-12, -4));
      this.setState({ today: updateTime });
    }, 1000);
  };

  componentDidMount() {
    this.startTimersForClock();
  }

  componentDidUpdate(prevProp: Props) {
    if (prevProp.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProp.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerIdClock);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.state.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
