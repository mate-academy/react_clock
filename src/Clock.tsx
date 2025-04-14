import React from 'react';

type State = {
  today: Date;
  timerTodayId: number;
};

type Props = {
  name: string;
};

export class Clock extends React.Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
    timerTodayId: 0,
  };

  componentDidMount(): void {
    this.setState({
      timerTodayId: window.setInterval(() => {
        const currentTime = new Date();

        this.setState({
          today: currentTime,
        });

        const currentTimeToUTC = currentTime.toUTCString().slice(-12, -4);

        // eslint-disable-next-line no-console
        console.log(currentTimeToUTC);
      }, 1000),
    });
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.state.timerTodayId);
  }

  render(): React.ReactNode {
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
