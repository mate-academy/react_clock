import React from 'react';
import './App.scss';

type ClockProps = {
  name: string;
  today: Date;
};
type State = {
  today: Date;
};

export class Clock extends React.PureComponent<ClockProps> {
  state: State = {
    today: new Date(),
  };

  todayIntervalId: number | undefined;

  componentDidMount(): void {
    this.todayIntervalId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    
    if (prevState.today !== this.state.today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.todayIntervalId);
  }

  render() {
    const { name } = this.props;
    const { today } = this.state;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>
        {' time is '}
        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
